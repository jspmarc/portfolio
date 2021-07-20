<script lang="ts">
  import { fly } from 'svelte/transition';
  import { push } from 'svelte-spa-router';
  import ComingSoon from './ComingSoon.svelte';

  const changePageWheel = (
    e: WheelEvent & {
      currentTarget: EventTarget & HTMLDivElement;
    }
  ) => {
    if (e.deltaY < 0) push('/about');
    else if (e.deltaY > 0) push('/blog');
  };
</script>

<svelte:head>Projects | Josep Marcello</svelte:head>

<div on:wheel={changePageWheel} in:fly={{ duration: 300, x: -100 }}>
  <ComingSoon />
</div>
