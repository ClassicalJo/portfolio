<script lang="ts">
  import { getContext, onMount } from 'svelte'
  import type { ScrollTargetKey } from './Scroller'
  import { key, Scroller } from './Scroller'
  import { setObservable } from './setObservable'
  import { slideIndex } from './store'
  export let index: number

  let section: HTMLElement
  const onObserve = () => slideIndex.updateColor(index)
  const onUnobserve = undefined
  const options: IntersectionObserverInit = { threshold: 0.5 }

  export let target: ScrollTargetKey
  const scroller = getContext<Scroller>(key)

  onMount(() => {
    scroller.setTarget(target, section.getBoundingClientRect().top)

    const observer = setObservable(onObserve, onUnobserve, options)
    observer && observer.observe(section)
    return () => observer && observer.unobserve(section)
  })
</script>

<section bind:this={section} class="slide" id={target}>
  <slot />
</section>

<style>
  .slide {
    padding: 0 40px;
    height: 100vh;
  }
</style>
