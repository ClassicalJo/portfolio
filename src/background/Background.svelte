<script lang="ts">
  import { onMount } from 'svelte'
  import mountCanvas from './animation'
  let canvas: HTMLCanvasElement
  export let red: boolean
  export let blue: boolean
  export let green: boolean

  onMount(() => {
    mountCanvas(canvas)
  })
</script>

<div class="black flex">
  <div class:red class:green class:blue class="container flex">
    <canvas bind:this={canvas} width={1900} height={1080} />
  </div>
</div>

<style>
  .flex {
    display: flex;
    align-items: center;
    justify-content: center;
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
