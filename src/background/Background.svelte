<script lang="ts">
  import { onMount } from 'svelte'
  import mountCanvas from './animation'
  import { slideIndex } from '../common/store'
  let canvas: HTMLCanvasElement
  $: red = $slideIndex === 3
  $: green = $slideIndex === 1
  $: blue = $slideIndex === 5

  const getValue = () => $slideIndex
  onMount(() => {
    mountCanvas(canvas, getValue)
  })
</script>

<div class="black flex">
  <div class:red class:green class:blue class="container flex">
    <canvas bind:this={canvas} width={1900} height={1080} />
  </div>
</div>

<style>
  .flex {
    align-items: center;
    justify-content: center;
    grid-area: container;
    display: flex;
  }
  .container {
    height: 100vh;
    width: calc(100vh * 2.5);
  }
  .black {
    background: rgb(0, 0, 0);
  }
  .green {
    background: rgb(0, 0, 0);
    background: radial-gradient(circle, rgba(0, 255, 0, 1) 0%, rgba(0, 0, 0, 1) 100%);
  }
  .red {
    background: rgb(0, 0, 0);
    background: radial-gradient(circle, rgba(255, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 100%);
  }
  .blue {
    background: rgb(0, 0, 0);
    background: radial-gradient(circle, rgba(0, 0, 255, 1) 0%, rgba(0, 0, 0, 1) 100%);
  }

  canvas {
    height: 100%;
    width: auto;
  }
</style>
