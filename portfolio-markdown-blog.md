# Plan: Markdown Blog (branch `markdown-blog`)

**Repo:** `/home/josep/projects/portfolio`
**Branch:** `markdown-blog` (HEAD `5ac93f4`, 6 commits ahead of `fca94ab`)
**Supersedes:** the earlier plan written against `main` — most of its library recommendations are obsolete.

---

## Part 1 — Context

### What changed

The earlier plan was written against `main`, where the blog was a `ComingSoon` stub and no Markdown tooling existed. This branch has already done the foundational work, and it made the better call on tooling: **mdsvex**, not the `marked` + `{@html}` path the old plan recommended. In a Svelte project that was the right instinct — `marked` produces an HTML string injected with `{@html}`, losing scoped styles and Svelte components, and nothing here wanted that.

Concretely, `marked` and `gray-matter` are **not** needed and should not be added:

| Old recommendation | Status on this branch |
|---|---|
| `marked` for rendering | **obsolete** — mdsvex renders markdown directly into Svelte components |
| `gray-matter` / `yaml` for frontmatter | **obsolete** — mdsvex parses frontmatter and exports it as `metadata` |
| `highlight.js` for code | **obsolete** — mdsvex ships Prism highlighting internally |
| `vitest` for tests | still open (D1 below) |

### Architecture as built

- **Renderer:** mdsvex `0.12.8`, registered in `svelte.config.js:8` alongside `vitePreprocess()`, with `extensions: ['.svx', '.md']` declared on both the preprocessor and `kit.extensions` (line 10). Config lives in `mdsvex.config.js` with `smartypants` (quotes off, backticks, oldschool dashes) and `rehype-external-links` forcing `target="_blank"` + `rel="noopener noreferrer"`.
- **Post shape:** one folder per post under `src/routes/blog/`, each containing `content.md` (the body) and `+page.svelte` (the route). The post *is* a Svelte page, so its URL is the folder path.
- **Registry:** `src/lib/data/BlogPost.ts` globs `../../routes/blog/*/content.md` with `import.meta.glob`, reads each module's `metadata` export, derives `slug` from the folder name via regex (`BlogPost.ts:21`), builds `url`, filters `draft !== true`, and sorts newest-first with a title tiebreak.
- **List page:** `src/routes/blog/+page.svelte` renders `<h1>Blog</h1>`, an intro paragraph, then an ordered `<ul>` of posts showing title, `<time>` and description, with a "No posts yet" empty state.

### Verified state

`pnpm check` → 0 errors, 0 warnings. `pnpm build` → succeeds, writes `dist/`. Build output:

```
dist/404.html   dist/about.html   dist/blog.html
dist/index.html dist/projects.html dist/blog/00-test-blogpost.html
```

So the pipeline works end to end: markdown → route → prerendered HTML.

### The draft leak (the one real bug)

`content.md:4` sets `draft: true`. `BlogPost.ts:29` correctly filters it out of the list — `dist/blog.html` contains zero occurrences of the slug. **But `dist/blog/00-test-blogpost.html` is still built and publicly served.**

Cause: each post folder is a route in its own right, so SvelteKit prerenders it regardless of what the metadata says. `draft` currently controls *listing*, not *existence*. Anything marked draft is one direct URL away from being public.

This is a security-relevant property for a writing workflow: "draft" needs to mean unpublished, not just unlisted. Two fixes, different costs — see Phase 1.

### Highlighting is already present, but not wired

mdsvex bundles Prism (`prismjs` `1.30.0`, `prism-svelte` `0.4.7`, both direct deps of mdsvex) and highlights fenced code **with no configuration at all**. Two things follow:

1. **No theme CSS is imported anywhere.** Prism emits `token` classes; without a stylesheet they render as unstyled text. Add `import 'prismjs/themes/prism.css'` (or a theme matching the palette) in `+layout.svelte` next to the existing `@fortawesome` import.
2. **The sample post's fence is ` ```python3 `, which Prism does not define.** Checked `prism-python.js` in `1.30.0`: it registers `python` and aliases only `py`. There is no `python3` alias, so that block silently highlights nothing. Not a crash, just dead output — confirmed in the built HTML, where the `<code>` carries `class="language-python3"` and no token spans at all.

Use `py` or `python` in fences, or add `highlight: { alias: { python3: 'python' } }` to `mdsvexOptions` so existing fences keep working.

### Debug leftover to remove

`src/routes/blog/00-test-blogpost/+page.svelte:9-11` dumps `JSON.stringify(metadata, undefined, 4)` in a `<pre>` above the content. It was useful for confirming frontmatter parsing; it should not survive into a real post.

### Known good practice already present — keep it

`ViewContainer` (`src/lib/components/shared/ViewContainer.svelte:39-44`) binds `onwheel`/`ontouchmove` and calls `goto()` when `nextViewPath`/`prevViewPath` are set. This is **correct for its one existing caller** (`src/routes/+page.svelte:21`), where the page is exactly one viewport tall (`height: var(--min-content-height)`) and the gesture is the intended "scroll down" affordance.

The forward-looking constraint: **a blog post will be the first genuinely scrollable view in this app.** `ViewContainer` is used with no props on `about`, `projects`, `blog`, `404` and `+error` — keep it that way for post pages. Do not edit `ViewContainer` to add scroll-awareness; the fix belongs at the call site.

### Housekeeping

- `.prettierignore` does not cover `.md`, and Prettier is configured with `plugins: ["prettier-plugin-svelte"]` and `useTabs: true`. Markdown files under `src/routes/blog/*/` are currently formatted with tabs and will be reformatted by `pnpm format`. Decide whether to add the blog content dir to `.prettierignore` (leaves prose formatting to your editor) or accept Prettier's reflow.
- `src/routes/404/+page.svelte` exists deliberately, per its own comment, to emit `404.html` for Netlify/Cloudflare. Do not collapse it into `+error.svelte`.

---

## Part 2 — Decisions

All three are now settled, with defaults chosen so the plan can run start to finish without further input. Each is reversible if the tradeoff later proves wrong.

### D1 — Testing: **none for now**

Decided: no test runner, no vitest, no `test_engineer` gate. Verification is `pnpm check`, `pnpm lint`, `pnpm build`, inspecting `dist/`, and a browser pass — all of which are already in Phase 5 and cover this feature adequately at its current scale.

Consequence to accept knowingly: the sort and draft-filter logic in `BlogPost.ts` is verified by reading it, not by executing it. If the blog grows past a handful of posts and dates start mattering, revisit.

### D2 — Prism theme: **stock theme first, custom later**

`prismjs/themes/prism.css` for now. The stock theme will not match the palette (`--cyan #004852`, `--white #f1f1e6`, `--blue #9cd5e0`, `--brown #8a6a55`, `--teal #17cccc`, `+layout.svelte:45-50`), but it gets contrast and token coverage correct on day one.

Hand-rolling a theme from the palette means picking five token colours and checking WCAG contrast on each — real work, and easy to get wrong. Ship with the stock theme, confirm the reading experience, then decide whether a custom theme earns its maintenance. Revisit only if the mismatch is actually visible.

### D3 — Draft enforcement: **build-time 404, keep the page component**

A post folder keeps its `+page.svelte` — it carries the `<svelte:head>` title and any JS the post needs, so it is real content, not scaffolding. Draft state is enforced by a sibling `+page.ts`:

```ts
// src/routes/blog/<slug>/+page.ts
import { error } from '@sveltejs/kit';
import { metadata } from './content.md';

export function load() {
	if (metadata.draft === true) error(404, 'Post not found');
}
```

`error(404)` during prerendering makes SvelteKit skip writing that page, so no HTML is emitted for the draft. Pair it with `prerender.handleHttpError: 'ignore'` in `svelte.config.js` so the intentional 404 does not fail the build.

Chosen over the structural alternative (delete `+page.svelte` from drafts) because the component is genuinely load-bearing — it holds the per-post title and is where a post's JS lives. Making drafts depend on *absence* of a file would mean every published post needs a hand-written component, and every draft is invisible at its own URL while being written, which is the case where you most want to preview.

Cost: one extra file per post folder, and the check is duplicated per post rather than structural. Acceptable at this scale; if post count grows, the move is a dynamic `[slug]` route with `entries()`.

---

## Part 3 — Phases

### Phase 1 — Close the draft leak

- [ ] **1.1** Add `src/routes/blog/00-test-blogpost/+page.ts` that `error(404)`s when `metadata.draft === true`. Keep `+page.svelte` untouched — it holds the per-post title and is the right place for post JS.
- [ ] **1.2** Add `prerender: { handleHttpError: 'ignore' }` to `kit` in `svelte.config.js` so the intentional 404 is skipped rather than failing the build.
- [ ] **1.3** `pnpm build`, then `find dist -name '*.html'` — `dist/blog/00-test-blogpost.html` must be absent while `dist/blog.html` still exists. That assertion is the whole point of the phase.
- [ ] **1.4** Repeat the guard for every new post folder as they are created; there is no shared enforcement yet.

### Phase 2 — Highlighting

- [ ] **2.1** `import 'prismjs/themes/prism.css'` in `+layout.svelte` next to the `@fortawesome` import (line 2). Stock theme per D2.
- [ ] **2.2** Add `highlight: { alias: { python3: 'python' } }` to `mdsvexOptions` in `mdsvex.config.js` so the existing `python3` fence resolves; Prism aliases only `py`, and unknown languages fail silently.
- [ ] **2.3** Confirm token spans in the built HTML — `grep -o 'token[a-z-]*' dist/blog/**/*.html` — and that colours actually render in the browser. Note this needs a published post to inspect; pair with a temporary non-draft, or check via `pnpm dev` first.

### Phase 3 — Post page polish

- [ ] **3.1** Remove the `JSON.stringify(metadata)` debug block from `00-test-blogpost/+page.svelte:9-11`.
- [ ] **3.2** Add a "Back to Blog" link to the post page (`$lib/components/shared/` or inline). Required by the spec and currently missing.
- [ ] **3.3** Add prose styling for rendered markdown: cap measure around 70ch, `pre` scrolls horizontally rather than overflowing, images capped at `100%`, blockquote and table styling in palette colors. Because mdsvex output is real Svelte markup, this can be a normal scoped `<style>` block — **no `:global()` needed**, which was the main drawback of the old `{@html}` plan.
- [ ] **3.4** Verify the post page passes **neither** `nextViewPath` nor `prevViewPath` to `ViewContainer` (see Context).

### Phase 4 — List page polish

- [ ] **4.1** Format the date. `blog/+page.svelte:27` renders the raw ISO string `2026-09-27T21:01:00+09:00`; use `toLocaleDateString` and keep the `datetime` attribute machine-readable.
- [ ] **4.2** Decide Prettier's handling of `.md` files (see Housekeeping), then apply consistently.
- [ ] **4.3** Responsive pass at 320 / 768 / 1280 — especially `pre` blocks and wide tables on a post page.

### Phase 5 — Verify and ship

- [ ] **5.1** `pnpm check`, `pnpm lint`, `pnpm format`, `pnpm build` all clean.
- [ ] **5.2** Browser pass: list → click a post → back link → direct URL to a draft (must 404) → bogus URL shows the 404 page.
- [ ] **5.3** Replace the test post with real content, or mark it `draft: true` and remove its route per Phase 1.
- [ ] **5.4** `git add` `Josep-Marcello.md` to `.gitignore`.
- [ ] **5.5** Update `.swarm/spec.md` to match reality: it still describes a `svelte-spa-router` hash-routed SPA, paths under `src/data/` and `src/styles/`, entities named `BlogListView`/`BlogPostView`, and a "renderer MUST produce safe HTML" requirement that does not apply (author-owned content, build-time compile, no untrusted input path).

---

## Part 4 — Risks

| Risk | Mitigation |
|---|---|
| Draft posts publicly reachable at a direct URL | Phase 1; asserted in 1.3 by checking `dist/` |
| Draft guard is per-folder, so a new post can forget it | documented in 1.4; migrate to a dynamic `[slug]` route if post count grows |
| No automated tests | accepted for now (D1); verification is build output + browser pass |
| Unregistered fence language renders unhighlighted, silently | Phase 2.2 alias; Prism gives no warning for unknown languages |
| Stock Prism theme clashes with the site palette | Phase 3.3 + D2 |
| Long code blocks overflow horizontally on mobile | Phase 4.3; `pre { overflow-x: auto }` |
| `ViewContainer` wheel-capture would hijack article scrolling | omit both path props on post views (3.4); component is fine as-is |
| Prettier reflows prose unexpectedly | resolve in 4.2 before mass-formatting |

---

## Done means

A visitor reads a post at a static URL with correct typography and Prism-highlighted code; the list is sorted newest-first; **drafts return 404 rather than rendering**; posts link back to the list; and pages match the existing palette and fonts.
