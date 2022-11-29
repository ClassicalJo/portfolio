<script lang="ts">
  import { flip } from 'svelte/animate'
  import Item from './Item.svelte'
  import Slider from './Slider.svelte'
  import Button from './Button.svelte'
  let uid = 0
  let items = [
    { id: uid++, src: './prism.png' },
    { id: uid++, src: './denim.webp' },
    { id: uid++, src: 'https://via.placeholder.com/800' },
    { id: uid++, src: 'https://via.placeholder.com/700' },
    { id: uid++, src: 'https://via.placeholder.com/600' },
    { id: uid++, src: 'https://via.placeholder.com/500' }
  ]
  function setItems(index: number) {
    currentIndex = index
  }
  function advance() {
    if (currentIndex === items.length - 1) currentIndex = 0
    else currentIndex++
    return currentIndex
  }
  function retreat() {
    if (currentIndex === 0) currentIndex = items.length - 1
    else currentIndex--
    return currentIndex
  }
  let currentIndex = 0
  const totalItems = items.length
</script>

<div class="container flex flex-1">
  <div class="scene flex">
    <div class="limiter">
      <div class="item" />
      {#each items as item, index (item.id)}
        <div
          class="carousel"
          class:selected={index === currentIndex}
          class:hidden={index !== currentIndex}
          animate:flip={{ duration: 500 }}
        >
          <Item src={item.src} alt="" />
        </div>
      {/each}
    </div>
    <Slider {currentIndex} {totalItems} onClick={setItems} />
    <Button left={true} onClick={retreat}>
      <title>Previous project</title>
    </Button>
    <Button right={true} onClick={advance}>
      <title>Next project</title>
    </Button>
  </div>
</div>

<style>
  .container {
    justify-content: center;
    position: relative;
  }
  .scene {
    position: relative;
    max-width: 800px;
    height: 100%;
    flex: 1;
    overflow: hidden;
  }
  .limiter {
    background-color: rgba(0, 255, 253, 0.2);
    display: grid;
    position: relative;
    grid-template-areas: 'main hidden';
  }
  .carousel {
    position: relative;
    grid-area: hidden;
  }
  .selected {
    grid-area: main;
  }
  .hidden {
    visibility: hidden;
  }
</style>