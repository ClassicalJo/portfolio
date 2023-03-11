<script lang="ts">
  import { createStackList } from '../stores/stackList'
  import { createTouchStore } from '../stores/touch'
  import Button from './Button.svelte'
  import Item from './Item.svelte'
  import Slider from './Slider.svelte'
  import { items } from './projects'

  const { stack, currentIndex, animate, next, previous, setItem } = createStackList(items)
  const { touchStart, touchMove, touchEnd } = createTouchStore(0.1)
  const handleTouchMove = (e: TouchEvent & { currentTarget: HTMLDivElement }) =>
    touchMove(e, previous, next)
</script>

<div class="container flex flex-1">
  <div class="scene-wrapper">
    <div class="scene flex-1 relative flex-column flex">
      <div
        class="items"
        aria-label="carousel"
        on:touchstart={touchStart}
        on:touchend={touchEnd}
        on:touchmove={handleTouchMove}
        on:touchcancel={touchEnd}
      >
        {#each $stack as stackItem (stackItem.id)}
          {@const { item } = stackItem}
          {@const selected = $currentIndex === stackItem.id}
          <div
            class="item"
            class:right={selected && $animate === 'right'}
            class:left={selected && $animate === 'left'}
            aria-hidden={!selected}
          >
            <Item
              id={item.id}
              src={item.src}
              alt=""
              tags={item.tags}
              deploy={item.deploy}
              github={item.github}
            />
          </div>
        {/each}
      </div>
      <div class="controls absolute flex flex-1 center">
        <Button left={true} onClick={previous}>
          <title>Previous project</title>
        </Button>
        <Slider
          currentIndex={$currentIndex}
          totalItems={items.length}
          onClick={setItem}
        />
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
  .right {
    animation: right 0.5s ease-out forwards;
  }
  .left {
    animation: left 0.5s ease-out forwards;
  }
  .item {
    @include beforeAbsolute;
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
    overflow-x: hidden;
  }
</style>
