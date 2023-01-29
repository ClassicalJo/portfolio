<script lang="ts">
  import { flip } from 'svelte/animate'
  import Item from './Item.svelte'
  import Slider from './Slider.svelte'
  import Button from './Button.svelte'
  import { createCarouselStore } from '../common/store'
  let uid = 0
  let items = [
    { tags: ['react', 'javascript', 'redux'], id: uid++, src: './prism.png' },
    { tags: ['react', 'javascript', 'redux'], id: uid++, src: './denim.webp' },
    {
      tags: ['react', 'javascript', 'redux'],
      id: uid++,
      src: 'https://via.placeholder.com/800'
    },
    {
      tags: ['react', 'javascript', 'redux'],
      id: uid++,
      src: 'https://via.placeholder.com/700'
    },
    {
      tags: ['react', 'javascript', 'redux'],
      id: uid++,
      src: 'https://via.placeholder.com/600'
    },
    {
      tags: ['react', 'javascript', 'redux'],
      id: uid++,
      src: 'https://via.placeholder.com/500'
    }
  ]

  const currentIndex = createCarouselStore(items.length - 1)
  const { previous, next, setSlide } = currentIndex
  const totalItems = items.length
</script>

<div class="container flex flex-1">
  <div class="scene-wrapper">
    <div class="scene flex-1 relative flex-column flex">
      <div class="items flex" aria-label="carousel">
        {#each items as item, index (item.id)}
          {@const selected = index === $currentIndex}
          <div
            class="carousel flex flex-1"
            class:selected
            class:hidden={!selected}
            aria-hidden={!selected}
            animate:flip={{ duration: 500 }}
          >
            <Item src={item.src} alt="" tags={item.tags} />
          </div>
        {/each}
      </div>
      <div class="controls absolute flex flex-1 center">
        <Button left={true} onClick={previous}>
          <title>Previous project</title>
        </Button>
        <Slider currentIndex={$currentIndex} {totalItems} onClick={setSlide} />
        <Button right={true} onClick={next}>
          <title>Next project</title>
        </Button>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  @use '../scss/global.scss' as *;
  .container {
    justify-content: center;
  }

  .scene,
  .scene-wrapper,
  .scene-wrapper::before {
    max-width: 1200px;
    min-height: 600px;
    position: relative;
    width: 100%;
  }
  .scene-wrapper {
    padding: 14px;
  }
  .scene-wrapper::before {
    @include beforeAbsolute;
    max-width: 1228px;
    background-color: red;
    border-radius: 14px;
    background: $gradientHeader;
    box-shadow: 0px 3px 15px black;
  }
  .controls {
    bottom: 0;
    margin-bottom: 14px;
    height: 45px;
    width: 100%;
  }
  .items {
    @include beforeAbsolute;
  }
</style>
