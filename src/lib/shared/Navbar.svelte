<!--
Inspiration:
  - https://www.youtube.com/watch?v=biOMz4puGt8,
  - https://github.com/fireship-io/222-responsive-icon-nav-css
-->
<script lang="ts">
	import NavItems from '../data/NavItem.js';
	import SocialMedias from '../data/SocialMedia';
	import { page } from '$app/stores';

	let navbarExpanded = false;
</script>

<nav>
	<ul class="container">
		{#each NavItems as { text, link, icon }}
			<li class="nav-item">
				<a
					href={link}
					class={'nav-item-inner-container ' + ($page.url.pathname === link && 'active')}
				>
					<i class="fas fa-{icon} fa-2x icon" />
					<span class="text">
						{text}
					</span>
				</a>
			</li>
		{/each}

		<li class="nav-item">
			<ul class="social-medias">
				{#each SocialMedias as { text, link, icon, isBrand }}
					<li class="social-item">
						<a href={link} target="_blank" class="nav-item-inner-container">
							<i class="{isBrand ? 'fab' : 'fas'} fa-{icon} fa-2x icon" />
							<span class="text">
								{text}
							</span>
						</a>
					</li>
				{/each}
			</ul>
			<button
				class="nav-item-inner-container socials-button {navbarExpanded && 'active'}"
				on:click={() => (navbarExpanded = !navbarExpanded)}
			>
				<i class="fa-solid fa-circle-user fa-2x icon" />
				<span class="text">Socials</span>
			</button>
		</li>
	</ul>

	{#if navbarExpanded}
		<ul class="mobile-social-medias">
			{#each SocialMedias as { text, link, icon, isBrand }}
				<li class="social-item">
					<a
						href={link}
						target="_blank"
						class="nav-item-inner-container"
						on:click={() => (navbarExpanded = false)}
					>
						<span class="text">
							{text}
						</span>
						<i class="{isBrand ? 'fab' : 'fas'} fa-{icon} fa-2x icon" />
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</nav>

<style lang="scss">
	@import '../../styles/mixin.scss';

	nav {
		--navbar-open-width: 12rem; // FIXME: Kecilin dan mungkin jgn pake rem?
		--navbar-item-icon-size: calc(0.3 * var(--navbar-width));

		background-color: var(--cyan);
		bottom: 0;
		margin: 0;
		height: var(--navbar-width);
		position: fixed;
		transition: 0.3s;
		width: 100vw;

		.container {
			align-items: flex-start;
			display: flex;
			flex-direction: row;
			list-style: none;
			justify-content: space-around;
			margin: 0;
			padding: 0;
		}

		.mobile-social-medias {
			background-color: var(--cyan);
			border-radius: 0.5rem 0.5rem 0 0;
			bottom: var(--navbar-width);
			list-style: none;
			margin: 0;
			padding: 0 2rem;
			position: fixed;
			right: 0;
			transition: var(--transition-speed);
			width: var(--navbar-open-width);

			.text {
				display: block;
				flex-grow: 1;
				margin-right: 1rem;
			}
		}

		.nav-item {
			width: 100%;

			&:last-child {
				display: block;
			}
		}

		.nav-item-inner-container {
			align-items: center;
			color: var(--white);
			cursor: pointer;
			display: flex;
			justify-content: flex-start;
			height: var(--navbar-width);
			outline: none; // FIXME: cursed...
			text-decoration: none;
			width: 100%;
		}

		.icon {
			margin: auto;
			width: var(--navbar-item-icon-size);
		}

		.social-medias {
			display: none;
		}

		.text {
			display: none;
		}

		:global(.active) {
			background-color: var(--white);
			transition: var(--transition-speed);

			color: var(--cyan) !important;
		}

		@include respond-to('xl') {
			height: 100vh;
			width: var(--navbar-width);

			.container {
				flex-direction: column;
				height: 100%;
			}

			.mobile-social-medias {
				display: none;
			}

			.nav-item:last-child {
				display: block;
				margin-top: auto;
			}

			.nav-item-inner-container {
				width: var(--navbar-width);
				&:hover {
					color: var(--blue);
					transition: var(--transition-speed);
				}
			}

			.icon {
				margin: 0 1.5rem;
			}

			.social-medias {
				display: flex;
				flex-direction: column;
				justify-content: center;
				list-style: none;
				padding: 0;
			}

      .socials-button {
        display: none;
      }

			/* Handle hover */
			&:hover {
				color: var(--cyan);
				width: var(--navbar-open-width);
				transition: var(--transition-speed);

				.nav-item-inner-container {
					width: var(--navbar-open-width);
				}

				.text {
					display: block;
					flex-grow: 1;
					margin-left: 1rem;
				}
			} /* end &:hover */
		}
	}
</style>
