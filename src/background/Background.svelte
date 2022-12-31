<script lang="ts">
  import { onMount } from 'svelte'
  import { slideIndex } from '../common/store'
  import mountCanvas from './animation'
  let canvas: HTMLCanvasElement

  const { animation, start } = mountCanvas()
  onMount(() => {
    start(canvas)
    animation.play()
  })
</script>

<div class="black grid">
  <canvas bind:this={canvas} width={950} height={540} />
</div>

<style>
  .grid {
    position: fixed;
    z-index: -99;
    height: 100%;
    background: rgb(32, 191, 85);
    background: linear-gradient(
      135deg,
      rgba(32, 191, 85, 1) 0%,
      rgba(0, 170, 170, 1) 100%
    );
  }

  canvas {
    height: 100vh;
    width: 100vw;
    object-fit: cover;
  }
</style>
