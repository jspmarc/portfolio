<script lang="ts">
	import Experiences from '$lib/data/Experiences';

	const slugifyTitle = (text: string) =>
		text
			.toLowerCase()
			.replace(/[^a-z0-9]+/g, '-')
			.replace(/(^-|-$)/g, '')
			.slice(0, 10);
</script>

{#each Experiences as { title, description, company, role, year, links }, idx (idx)}
	{@const detailsId = slugifyTitle(title) + idx}

	<div class="container">
		<div class="year">
			{#if year.to}
				<h4>{year.from.year}</h4>
				<h4 class="em-dash">&mdash;</h4>
				<h4>{year.to.year}</h4>
				<h4>{year.from.month}</h4>
				<h4>{year.to.month}</h4>
			{:else}
				<h4>{year.from.year}</h4>
				<h4 class="em-dash">&mdash;</h4>
				<h4 class="present">Present</h4>
				<h4>{year.from.month}</h4>
			{/if}
		</div>

		<div title="open summary" class="timeline">
			<button
				title="open details"
				class="timeline-circle"
				on:click={() => {
					const details: HTMLDetailsElement | null = document.querySelector(
						'#' + detailsId
					);
					if (details === null) {
						return;
					}
					details.toggleAttribute('open');
				}}
			></button>
		</div>

		<div class="content">
			<details id={detailsId}>
				<summary class="title">
					<i class="fas fa-chevron-right accordion-arrow"></i>
					<h4>
						{role ?? title}
						{#if company}
							<span class="company">&middot; {company}</span>
						{/if}
					</h4>
				</summary>
				<div class="experience-content-description">
					<section>
						<!-- eslint-disable-next-line svelte/no-at-html-tags -->
						{@html description}

						{#if links}
							<div class="links">
								{#if links.gitRepo}
									<a href={links.gitRepo} target="_blank">
										<button class="links-button git-repo">
											<!-- TODO: Change this to the project's page when the Project view/page is done -->
											<i class="fab fa-git-alt"></i>
											Visit the Git repository
										</button>
									</a>
								{/if}
								{#if links.website}
									<a href={links.website} target="_blank">
										<button class="links-button git-repo">
											<i class="fas fa-external-link-alt"></i>
											Visit the website
										</button>
									</a>
								{/if}
								{#if links.certificate}
									<a href={links.certificate} target="_blank">
										<button class="links-button git-repo">
											<i class="fas fa-certificate"></i>
											View my certificate
										</button>
									</a>
								{/if}
							</div>
						{/if}
					</section>
				</div>
			</details>
		</div>
	</div>
{/each}

<style lang="scss">
	summary {
		background: none;
		border: none;
		cursor: pointer;
		outline: none;
		padding: 0;
		// the custom chevron replaces the native disclosure triangle
		list-style: none;

		color: inherit;
		font-size: inherit;

		&::-webkit-details-marker {
			display: none;
		}
	}

	h4 {
		margin: 0;
	}
	.accordion-arrow {
		transition: var(--transition-speed);
	}

	.container {
		--timeline-width: 5px;

		align-items: flex-start;
		align-self: stretch;
		column-gap: 1rem;
		display: grid;
		grid-template-columns: 8rem var(--timeline-width) 4fr;
		justify-content: flex-start;

		&:not(:last-child) {
			border-bottom: 1px solid rgba(0, 72, 82, 0.25); // var(--cyan) at 25%
		}
	}

	.content {
		align-items: flex-start;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;

		details {
			align-self: stretch;
		}
	}

	.experience-content-description {
		align-self: stretch;
		background-color: var(--cyan);
		border-radius: 0.5rem;
		justify-self: stretch;
		margin-top: 1rem;
		margin-left: 1rem;
		margin-bottom: 0.5rem;
		padding: 1rem;

		color: var(--white);

		:global(p) {
			margin-top: 0;
			margin-bottom: 0;
		}

		:global(ul) {
			margin-top: 0;
			margin-bottom: 0;
		}
	}

	.links {
		align-items: center;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;

		&-button {
			background-color: var(--blue);
			border-radius: 0.75rem;
			margin-top: 1rem;
			padding: 0.5rem 1rem;

			color: var(--cyan);

			transition: var(--transition-speed);

			&:hover {
				background-color: var(--brown);
				transform: scale(1.1);

				color: var(--white);

				transition: var(--transition-speed);
			}
		}
	}

	[open] .accordion-arrow {
		rotate: 90deg;
		transition: var(--transition-speed);
	}

	.title {
		align-items: center;
		display: flex;
		flex-direction: row;
		gap: 0.5rem;

		h4 {
			font-weight: 700;
		}

		.company {
			font-weight: 400;
			opacity: 0.8;
		}
	}

	.timeline {
		align-items: center;
		align-self: stretch;
		background-color: var(--cyan);
		border: 0;
		border-radius: 1rem;
		display: flex;
		flex-direction: column;
		height: inherit;
		justify-content: flex-start;
		justify-self: stretch;
		margin: 0;
		outline: none;
		width: var(--timeline-width);

		&:first-child {
			border-top-left-radius: 1rem;
			border-top-right-radius: 1rem;
		}

		&:last-child {
			border-bottom-left-radius: 1rem;
			border-bottom-right-radius: 1rem;
		}
	}

	.timeline-circle {
		--circle-wh: 1rem;

		background-color: var(--brown);
		border-radius: 100%;
		cursor: pointer;
		height: var(--circle-wh);
		margin: 0;
		padding: 0;
		width: var(--circle-wh);
	}

	.year {
		display: grid;
		grid-template-rows: 1fr 1fr;
		grid-template-columns: 45% 10% 45%;

		text-align: center;

		.em-dash,
		.present {
			grid-row-start: span 2;
			align-self: center;
		}

		.present {
			padding-left: 0.2rem;
		}
	}
</style>
