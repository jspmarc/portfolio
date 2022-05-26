<script lang="ts">
	import { slide } from 'svelte/transition';
	import type Skill from '$lib/types/Skill';

	export let skills: Skill[];

	let opened: Set<string> = new Set();

	const toggleOpen = (category: string) => {
		if (opened.has(category)) opened.delete(category);
		else opened.add(category);
		opened = opened;
	};
</script>

{#each skills as { category, contents }}
	<div class="category" class:opened={opened.has(category)}>
		<button on:click={() => toggleOpen(category)}>
			<h4 class="name">
				<i class="fas fa-chevron-right accordion-arrow" />{category}
			</h4>
		</button>
		{#if contents && opened.has(category)}
			<ul transition:slide|local class="content">
				{#each contents as { name, icon }}
					<li>
						{#if icon}
							{#if icon.src.toLowerCase().indexOf('fa') != -1}
								<i class="{icon.src} {icon.img_name} fa-lg icon" />
							{:else if icon.src == 'img'}
								<img src="/logo/{icon.img_name}" alt="" class="icon" />
							{/if}
						{:else}
							<!-- no icon -->
							<i class="fas fa-code fa-lg icon" />
						{/if}
						<span>{name}</span>
					</li>
				{/each}
			</ul>
		{/if}
	</div>
{/each}

<style lang="scss">
	h4 {
		font-size: 1rem;
		font-weight: 700;
	}
	.accordion-arrow {
		margin-right: 0.5rem;
		transition: var(--transition-speed);
	}

	.category {
		align-self: stretch;
		margin: 0;
		margin-bottom: 1rem;
		padding: 0;

		button {
			background: none;
			border: none;
			cursor: pointer;
			outline: none;

			color: inherit;
		}
	}

	.content {
		background-color: var(--cyan);
		border-radius: 1rem;
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
		margin: 0;
		margin-top: 1rem;
		margin-left: 1rem;
		padding: 1rem;
		list-style: none;

		color: var(--white);

		li {
			background-color: var(--blue);
			border-radius: 0.5rem;
			display: flex;
			gap: 0.25rem;
			overflow: hidden;
			padding: 0.25rem 0.75rem;

			color: var(--cyan);
			text-align: center;

			transition: 0.1s;

			&:hover {
				background-color: var(--brown);
				transform: scale(1.1);
				transition: 0.1s;

				color: var(--white);
			}

			img {
				height: 1.33rem;
				margin: 0;
				padding: 0;
			}
		}
	}

	.name {
		margin: 0;
	}

	.opened {
		.accordion-arrow {
			rotate: 90deg;
			transition: var(--transition-speed);
		}
	}
</style>
