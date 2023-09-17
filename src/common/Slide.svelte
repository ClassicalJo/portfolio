<script lang="ts">
  import { getContext, onMount } from 'svelte'
  import type { Writable } from 'svelte/store'
  import type { SectionName } from './Scroller'
  import { Scroller, scrollerKey } from './Scroller'
  import { sectionKey } from './store'
  export let index = 0
  export let offsetY = 0
  export let threshold = 0.5
  export let target: SectionName
  export let slide = true
  let section: HTMLElement
  const scroller = getContext<Scroller>(scrollerKey)
  const currentSection = getContext<Writable<SectionName>>(sectionKey)
  const options: IntersectionObserverInit = {
    threshold
  }

  onMount(() => {
    scroller.setTarget(target, section.getBoundingClientRect().top + offsetY)
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) $currentSection = target
    }, options)
    observer && observer.observe(section)
    return () => observer && observer.unobserve(section)
  })
</script>

<section bind:this={section} class:slide id={`${target}-${index}`}>
  <slot />
</section>

<style>
  .slide {
    min-width: 100vw;
  }
</style>
