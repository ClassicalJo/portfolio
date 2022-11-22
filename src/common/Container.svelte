<script lang="ts">
  import { getContext, onMount } from 'svelte'
  import { key, Scroller } from '../common/Scroller'
  let container: HTMLElement
  const scroller = getContext<Scroller>(key)
  onMount(() => {
    scroller.setContainer(container)
  })
</script>

<div class="container flex">
  <div class="content" bind:this={container}>
    <slot />
  </div>
</div>

<style>
  .flex {
    display: flex;
  }
  .container {
    grid-area: container;
    justify-content: center;    
  }
  .content {    
    overflow-y: auto;
    scroll-behavior: smooth;
  }
  .content::-webkit-scrollbar {
    background-color: rgba(255, 255, 255, 0.1);
    width: 10px;
  }
</style>
