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
  const height = window.innerHeight
  onMount(() => {
    const observer = setObservable(
      () => visibleHero.set(true),
      () => visibleHero.set(false),
      { threshold: 0 }
    )
    observer && observer.observe(card)
    return () => observer && observer.unobserve(card)
  })
</script>

<Slide index={0} target="home">
  <div class="flex container" style="height:{height}px">
    <div bind:this={card} class="flex-1 flex flex-column content">
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
  .content {
    min-width: 992px;
  }

  .text-wrapper {
    backdrop-filter: blur(10px);
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
