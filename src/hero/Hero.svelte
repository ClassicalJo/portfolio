<script lang="ts">
  import { onMount } from 'svelte'
  import { setObservable } from '../common/setObservable'
  import Slide from '../common/Slide.svelte'
  import { visibleHero } from '../common/store'
  import '../scss/base.scss'
  import Navigation from './Navigation.svelte'
  import Pretitle from './Pretitle.svelte'
  import Title from './Title.svelte'
  let card: HTMLElement

  onMount(() => {
    const observer = setObservable(
      () => visibleHero.set(true),
      () => visibleHero.set(false),
      { threshold: 0 }
    )
    observer && observer.observe(card)
    return () => observer && observer.unobserve(card)
  })
  let innerHeight: number
</script>

<svelte:window bind:innerHeight />
<Slide index={0} target="home">
  <div class="flex h-100 container" style="height:{innerHeight}px">
    <div bind:this={card} class="h-100 flex-1 flex flex-column content">
      <div class="text-wrapper flex flex-1 flex-column">
        <div class="flex flex-1 flex-column">
          <Title />
          <Pretitle />
        </div>
        <Navigation />
      </div>
    </div>
    <div class="flex flex-1 whitespace" />
  </div>
</Slide>

<style lang="scss">
  @use '../scss/global.scss' as *;
  @use '../scss/breakpoints.scss';
  .h-100 {
    min-height: fill-available;
  }
  .content {
    min-width: 992px;
  }
  .text-wrapper {
    backdrop-filter: blur(10px);
    padding: 25px;
    background: $gradientHero;
  }
  .whitespace {
    min-height: 300px;
  }
  @include breakpoints.lg {
    .text-wrapper {
      padding: 25px;
    }
  }
  @include breakpoints.md {
    .text-wrapper {
      padding: 10px;
    }
  }
</style>
