<script lang="ts">
  import { getContext, onMount } from 'svelte'
  import type { ScrollTargetKey } from './Scroller'
  import { key, Scroller } from './Scroller'
  import { setObservable } from './setObservable'
  import { currentSection, slideIndex } from './store'
  export let index: number
  export let target: ScrollTargetKey
  export let slide = true
  let section: HTMLElement

  const scroller = getContext<Scroller>(key)
  const onObserve = () => {
    currentSection.set(target)
    slideIndex.updateColor(index)
  }
  const onUnobserve = undefined
  const options: IntersectionObserverInit = { threshold: 0.5 }
  onMount(() => {
    scroller.setTarget(target, section.getBoundingClientRect().top)

    const observer = setObservable(onObserve, onUnobserve, options)
    observer && observer.observe(section)
    return () => observer && observer.unobserve(section)
  })
</script>

<section bind:this={section} class:slide id={target}>
  <slot />
</section>

<style>
  .slide {
    min-width: 100vw;
  }
</style>
