<script lang="ts">
  export let show: boolean
  let visible = false
  let timeout: NodeJS.Timeout
  $: {
    clearTimeout(timeout)
    switch (show) {
      case true: {
        timeout = setTimeout(() => {
          visible = false
        }, 1000)
        break
      }
      default: {
        visible = true
        break
      }
    }
  }
</script>

<div class="flex container" class:visible class:appear={show} class:disappear={!show}>
  <slot />
</div>

<style lang="scss">
  .container {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .visible {
    visibility: visible;
  }
  .appear {
    transition: top 1s ease;
    top: 0;
  }
  .disappear {
    transition: top 1s ease;
    top: -100%;
  }
</style>
