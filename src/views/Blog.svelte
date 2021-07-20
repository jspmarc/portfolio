<script lang="ts">
  import { fly } from 'svelte/transition';
  import { push } from 'svelte-spa-router';
  import ComingSoon from './ComingSoon.svelte';

  const changePageWheel = (
    e: WheelEvent & {
      currentTarget: EventTarget & HTMLDivElement;
    }
  ) => {
    if (e.deltaY < 0) push('/projects');
  };
</script>

<div on:wheel={changePageWheel} in:fly={{ duration: 300, x: -100 }}>
  <ComingSoon />
</div>
