<footer>
	Made with <i class="fas fa-heart" /> using
	<img src="/logo/svelte-logo.svg" alt="Svelte" class="svelte-icon" />
	Svelte and icons from <i class="fab fa-font-awesome" /> Font Awesome
</footer>

<style lang="scss">
	@import '../../styles/mixin.scss';

	footer {
		$teal: #17cccc;

		background-color: rgba($teal, 0.5);
		height: var(--footer-height);
		margin: 0;
		margin-bottom: var(--navbar-width);
		padding: 0;

		font-size: 0.75rem;
		text-align: center;

		.svelte-icon {
			width: 0.75rem;
		}

		@include respond-to('xl') {
			margin-bottom: 0;
		}
	}
</style>
