# My Personal Website

Josep Marcello's personal website.
[https://josepmarcello.com](https://josepmarcello.com)

# Tech stack

- SvelteKit 2 (`adapter-static`, fully pre-rendered)
- Svelte 5
- TypeScript
- SCSS

Every route is pre-rendered to static HTML at build time (`export const prerender = true` in
`src/routes/+layout.ts`), so page content ships as real HTML rather than being assembled in the
browser.

# Local development

```sh
pnpm install
pnpm dev        # dev server
pnpm build      # prerendered static output in build/
pnpm preview    # serve the production build locally
pnpm check      # svelte-check
pnpm lint       # eslint
pnpm format     # prettier
```

# Deploying

The site is deployed to Netlify / Cloudflare Pages. Build settings (also captured in
`netlify.toml`):

| Setting       | Value        |
| ------------- | ------------ |
| Build command | `pnpm build` |
| Publish dir   | `build`      |
| Node version  | `24`         |

# Legacy self-hosted deployment

`Dockerfile`, `docker-compose.yml`, `nginx/` and `scripts/init-letsencrypt.sh` are leftovers from
the original 2021 self-hosted setup for `jspmarc.my.id` (a different domain from the canonical URL
above). They are no longer the deploy path. The container still builds, since SvelteKit serves the
prerendered output through `vite preview` on port 5000, but the static files now make an extra hop
through nginx.

To bring that path back up:

1. Clone this repo
2. Adjust `email`, `domain`, and `data_path` variables in scripts/init-letsencrypt.sh
3. Run `docker-compose up --build -d --remove-orphans`
