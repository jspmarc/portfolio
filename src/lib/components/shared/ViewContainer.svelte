<script lang="ts">
	import { fly } from 'svelte/transition';
	import { goto } from '$app/navigation';

	interface Props {
		nextViewPath?: string | undefined;
		prevViewPath?: string | undefined;
		children?: import('svelte').Snippet;
	}

	let { nextViewPath = undefined, prevViewPath = undefined, children }: Props = $props();

	let touchStartY: number, touchEndY: number;

	const changePage = (e: WheelEvent | TouchEvent) => {
		if (window.TouchEvent && e instanceof TouchEvent) {
			const touch = e.touches[0] || e.changedTouches[0] || e.targetTouches[0];
			switch (e.type) {
				case 'touchstart':
					touchStartY = touch.pageY;
					break;
				case 'touchmove':
					touchEndY = touch.pageY;
					if (nextViewPath && touchEndY < touchStartY) goto(nextViewPath);
					else if (prevViewPath && touchEndY > touchStartY) goto(prevViewPath);
					break;
				default:
					break;
			}
		} else if (window.WheelEvent && e instanceof WheelEvent) {
			if (nextViewPath && e.deltaY > 0) goto(nextViewPath);
			else if (prevViewPath && e.deltaY < 0) goto(prevViewPath);
		}
	};

	const doNothing = () => {};
</script>

<div
	role="group"
	in:fly={{ duration: 300, x: -100 }}
	onwheel={nextViewPath || prevViewPath ? changePage : doNothing}
	ontouchstart={nextViewPath || prevViewPath ? changePage : doNothing}
	ontouchmove={nextViewPath || prevViewPath ? changePage : doNothing}
>
	{@render children?.()}
</div>
