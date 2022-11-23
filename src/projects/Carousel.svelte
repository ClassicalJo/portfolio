<script lang="ts">
  import Item from './Item.svelte'
  import { flip } from 'svelte/animate'
  import { slide } from 'svelte/transition'
  import { identity } from 'svelte/internal'

  let uid = 1
  let items: { id: number; src: string }[] = [
    { id: uid++, src: './prism.png' },
    { id: uid++, src: './denim.webp' },
    { id: uid++, src: 'https://via.placeholder.com/800' },
    { id: uid++, src: 'https://via.placeholder.com/500' }
  ]
  function addLast(input: { id: number; src: string }) {
    const item = {
      id: uid++,
      src: input.src
    }

    items = [...items, item]
  }
  function addFirst(input: { id: number; src: string }) {
    const item = {
      id: input.id,
      src: input.src
    }
    items = [item, ...items]
  }
  function remove(item: { id: number; src: string }) {
    items = items.filter(t => t !== item)
  }
  function backward() {
    const item = items[items.length - 1]
    remove(item)
    addFirst(item)
  }
  function forward() {
    const item = items[0]
    remove(item)
    addLast(item)
  }
</script>

<div class="container flex flex-1">
  <div class="scene flex">
    <div class="limiter">
      {#each items as item (item.id)}
        <div class="carousel" transition:slide animate:flip={{ duration: 500 }}>
          <Item src={item.src} alt="" />
        </div>
      {/each}
    </div>
    <button class="button left" on:click={backward}>Atras</button>
    <button class="button right" on:click={forward}>Adelante</button>
  </div>
</div>

<style>
  .button {
    position: absolute;
    bottom: 0px;
  }
  .left {
    left: 50px;
  }
  .right {
    right: 50px;
  }
  .container {
    /* background-color: rgba(12, 12, 12, 1); */
    
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
    /* background-color: rgba(122, 0, 0, 1); */
    display: grid;    
    grid-auto-flow: column;
  }
  .carousel {
    left: -100%;
    position: relative;
  }
</style>
