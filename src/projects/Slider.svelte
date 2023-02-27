<script lang="ts">
  import { cubicOut } from 'svelte/easing'
  import { crossfade } from 'svelte/transition'

  const [send, receive] = crossfade({
    duration: (d: number) => Math.sqrt(d * 1000),
    easing: cubicOut
  })

  export let currentIndex: number
  export let totalItems: number
  export let onClick: (int: number) => void
</script>

<div class="slider flex center">
  <div class="grid">
    {#each Array(totalItems) as _, index}
      <div class="grid-item flex flex-1">
        {#if index === currentIndex}
          <div class="selected" in:receive={{ key: 0 }} out:send={{ key: 0 }} />
        {/if}
        <button
          aria-label={`Display project ${currentIndex}`}
          aria-pressed={currentIndex === index}
          class="slider-button"
          on:click={() => onClick(index)}
        />
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  @use '../scss/global.scss' as *;
  .slider {
    filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 1));
    z-index: 4;
  }
  .grid {
    position: relative;
    display: grid;
    grid-auto-flow: column;
    column-gap: 10px;
    border-radius: 20px;
    background: rgb(32, 191, 85);
    background: $gradientHeader;
    margin: 10px;
    backdrop-filter: blur(10px);
  }
  .grid-item {
    position: relative;
    padding: 5px;
  }

  .slider-button {
    @include button;
    border-radius: 100%;
    width: 15px;
    height: 15px;
    aspect-ratio: 1;
    border: 0;
    background-color: rgba(255, 255, 255, 0.4);
    cursor: pointer;
    z-index: 10;
  }
  .selected {
    position: absolute;
    width: 15px;
    height: 15px;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 100%;
    z-index: 11;
  }
  .slider-button:hover,
  .slider-button:active {
    background-color: rgba(255, 255, 255, 0.6);
  }
</style>
