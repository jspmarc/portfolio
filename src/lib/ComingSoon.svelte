<div>
	<h1>Welcome!</h1>
	<h2>
		Unfortunately, this page is still in the making.<br />Please come back soon!
		<span>( *^-^)ρ(*╯^╰)</span>
	</h2>
</div>

<style lang="scss">
	@import '../styles/mixin.scss';

	div {
		align-items: center;
		display: flex;
		flex-direction: column;
		height: var(--min-content-height);
		justify-content: center;
		padding: 0 2rem;
		text-align: center;

		@include respond-to('xl') {
			padding: 0;
			text-align: left;
		}
	}

	h2 {
		margin: 0;
	}

	span {
		font-size: 0.9rem;
	}
</style>
