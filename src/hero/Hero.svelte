<script lang="ts">
  import { onMount } from 'svelte'
  import { setObservable } from '../common/setObservable'
  import Slide from '../common/Slide.svelte'
  import { visibleHero } from '../common/store'
  import '../scss/base.scss'
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
  <div class="flex container background" style="height:{height}px">
    <div bind:this={card} class="flex-1 flex flex-column content center">
      <Title />
    </div>
  </div>
</Slide>

<style lang="scss">
  @use '../scss/global.scss' as *;
  @use '../scss/breakpoints.scss';
  .background {
    backdrop-filter: blur(10px);
    background: $gradientHero;
    justify-content: center;
  }
  .content {
    max-width: 1000px;    
  }  
</style>
