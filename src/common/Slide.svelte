<script lang="ts">
  import { onMount } from 'svelte'
  import { slideIndex } from './store'
  export let index: number
  let section: HTMLElement
  let intersecting = false

  onMount(() => {
    if (typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver(
        entries => {
          intersecting = entries[0].isIntersecting
          if (intersecting) {
            slideIndex.updateColor(index)
          }
        },
        { threshold: 0.5 }
      )

      observer.observe(section)
      return () => observer.unobserve(section)
    }
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
