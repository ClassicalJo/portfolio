<script lang="ts">
  import Slide from '../common/Slide.svelte'
  import Title from './Title.svelte'
  const height = window.innerHeight
</script>

<Slide index={0} target="home">
  <div class="flex container background" style="height:{height}px">
    <div class="flex-1 flex flex-column content">
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
    padding-top: $headerOuterHeight;
    max-width: 1000px;
    align-items: center;
    justify-content: center;
  }
  @include breakpoints.sm {
    .content {
      justify-content: center;
    }
  }
</style>
