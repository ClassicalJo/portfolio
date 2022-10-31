<script lang="ts">
  import { onMount } from 'svelte'
  export let index: number
  export let onObservation: (int: number) => void
  let section: HTMLElement
  let intersecting: boolean = false
  onMount(() => {
    if (typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver(
        entries => {
          intersecting = entries[0].isIntersecting
          if (intersecting) {
            onObservation(index)
          }
        },
        { threshold: 0.2 }
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
