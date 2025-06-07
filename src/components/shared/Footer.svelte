<footer>
	Made with <i class="fas fa-heart" /> using
	<img src="./assets/logo/svelte-logo.svg" alt="Svelte" class="svelte-icon" />
	Svelte and icons from <i class="fab fa-font-awesome" /> Font Awesome
</footer>

<style lang="scss">
	footer {
		$teal: #17cccc;

		background-color: rgba($teal, 0.5);
		height: var(--footer-height);
		margin: 0;
		padding: 0;

		font-size: 0.75rem;
		text-align: center;

		.svelte-icon {
			width: 0.75rem;
		}
	}
</style>
