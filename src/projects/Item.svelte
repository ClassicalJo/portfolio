<script lang="ts">
  export let src: string
  export let alt: string
  let loading = true
  const toggle = () => (loading = !loading)
</script>

<img width="800" height="800" on:load={toggle} {src} {alt} />

<style lang="scss">
  .invisible {
    opacity: 0;
    visibility: hidden;
  }
  .visible {
    transition: visibility 1s ease;
    opacity: 1;
    visibility: visible;
  }
</style>
