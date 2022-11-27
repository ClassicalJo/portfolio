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

<div class="slider flex flex-1 center">
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
  .grid {
    position: relative;
    display: grid;
    grid-auto-flow: column;
    column-gap: 10px;
    border-radius: 20px;
    background: rgb(32, 191, 85);
    background: linear-gradient(
      90deg,
      rgba(32, 191, 85, 0.5) 0%,
      rgba(29, 26, 56, 0.5) 100%
    );
    margin: 10px;
    backdrop-filter: blur(10px);
  }
  .grid-item {
    position: relative;
    padding: 5px;
  }
  .slider {
    position: absolute;
    width: 100%;
    bottom: 0px;
  }
  .slider-button {
    border-radius: 100%;
    width: 15px;
    height: 15px;
    aspect-ratio: 1;
    border: 0;
    background-color: rgba(0, 0, 0, 0.3);
    cursor: pointer;
    z-index: 3;
  }
  .selected {
    position: absolute;
    width: 15px;
    height: 15px;
    background: #202c39;
    border-radius: 100%;
    z-index: 1;
  }
</style>
