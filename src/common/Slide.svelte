<script lang="ts">
  import { onMount } from 'svelte'
  import { setObservable } from './setObservable'
  import { slideIndex } from './store'
  export let index: number
  let section: HTMLElement
  const onObserve = () => slideIndex.updateColor(index)
  const onUnobserve = undefined
  const options: IntersectionObserverInit = { threshold: 0.5 }
  onMount(() => {
    const observer = setObservable(onObserve, onUnobserve, options)
    observer && observer.observe(section)
    return () => observer && observer.unobserve(section)
  })
</script>

<section bind:this={section} class="slide">
  <slot />
</section>

<style>
  .slide {
    padding: 0 40px;
    height: 100vh;
  }
</style>
