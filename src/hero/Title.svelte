<script lang="ts">
  import images from '../assets/images'
  let fontLoad = $state(false)
  document.fonts.ready.then(() => (fontLoad = true))

  let imageLoad = $state(false)
  let img = $state(new Image())
  img.src = images.cloud
  img.onload = () => (imageLoad = true)

  let appear = $derived(fontLoad && imageLoad)
</script>

{#if appear}
  <div class="flex-column flex appear">
    <div class="flex relative">
      <p class="pre-title absolute">Hi! I'm</p>
      <h1 class="hero-title" style="background-image:url({img.src})">ClassicalJo</h1>
    </div>
  </div>
{/if}

<style lang="scss">
  @use 'sass:color';
  @use '../scss/global.scss' as *;
  @use '../scss/breakpoints.scss';
  .appear {
    animation: appearFromBelow 0.3s;
  }
  .pre-title {
    @include text-d-l4;
    font-family: Noto Sans JP, sans-serif;
  }
  .pre-title {
    color: white;
    top: -36px;
  }
  .hero-title {
    position: relative;
    font-family: Alexandria, sans-serif;
    pointer-events: none;
    @include text-d-l1;
    background-position: center;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(0px 0px 4px $black);
    margin: 20px 0px 30px 0px;
  }

  @include breakpoints.md {
    .hero-title {
      @include text-m-l1;
      font-size: $fluid-m-l1;
      margin: 15px 0px 30px 0px;
      filter: drop-shadow(0px 0px 2px $black);
    }
    .pre-title {
      @include text-m-l5;
      top: -12px;
      left: 5px;
    }
  }
</style>
