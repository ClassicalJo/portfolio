<script lang="ts">
  import Slide from '../common/Slide.svelte'
  import Title from './Title.svelte'
  import { screenViewport } from '../common/store'
</script>

<Slide index={0} target="home">
  <div class="flex container background" style="height:{$screenViewport.height}px">
    <div class="flex-1 flex flex-column content">
      <Title />
    </div>
  </div>
</Slide>

<style lang="scss">
  @use '../scss/global.scss' as *;
  @use '../scss/breakpoints.scss';
  .background {
    background: $gradientHero;
    justify-content: center;
    margin-bottom: 124px;
  }
  .content {
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
