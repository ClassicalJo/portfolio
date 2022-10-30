<script lang="ts">
  import { onMount } from 'svelte'
  import mountCanvas from './animation'
  let canvas: HTMLCanvasElement
  onMount(() => {
    mountCanvas(canvas)
  })
</script>

<canvas bind:this={canvas} width={1900} height={1080} />

<style></style>
