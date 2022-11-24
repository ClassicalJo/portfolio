<script lang="ts">
  import { crossfade } from 'svelte/transition'
  import { flip } from 'svelte/animate'

  const [send, receive] = crossfade({
    duration: d => Math.sqrt(d * 200)
  })
  export let currentIndex: number
  export let totalItems: number
</script>

<div class="slider flex flex-1 center">
  <div class="grid">
    {#each Array(totalItems) as item, index (index)}
      <div class="grid-item" animate:flip>
        {#if index === currentIndex}
          <div class="selected" in:receive={{ key: 0 }} out:send={{ key: 0 }} />
        {/if}
        <button class="slider-button" />
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  .grid {
    position: relative;
    display: grid;
    grid-auto-flow: column;
    height: 15px;
    column-gap: 15px;
    background-color: rgba(12, 100, 12, 0.7);
  }
  .grid-item {
    position: relative;
    z-index: 1;
  }
  .slider {
    position: absolute;
    width: 100%;
    height: 50px;
    bottom: 0px;
  }
  .slider-button {
    border-radius: 100%;
    width: 15px;
    height: 15px;
    aspect-ratio: 1;
    background-color: black;
    cursor: pointer;
    z-index: 2;
  }
  .selected {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: aqua;
    border-radius: 100%;
  }
</style>
