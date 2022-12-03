<script lang="ts">
  import Slide from '../common/Slide.svelte'
  import Card from './Card.svelte'
  import Picture from './Picture.svelte'
</script>

<Slide target="about" index={1}>
  <div class="about center flex-column">
    <Card>
      <p class="flex-1 text">
        Hi! My name is Jose Barrientos, but pretty much everyone calls me Joe. I'm a
        developer from Argentina and I've been coding for about three years now
      </p>
      <Picture />
      <p class="flex-1 text">
        Currently living in Buenos Aires, I spent a lot of time travelling and working in
        Australia's east coast, mostly improving my english.
      </p>
    </Card>
  </div>
</Slide>

<style lang="scss">
  @use '../scss/global.scss' as *;
  @use '../scss/breakpoints.scss';
  .about {
    margin: 124px 44px;
    min-height: 100vh;
  }
  .text {
    @include text-d-l4;
  }
  @include breakpoints.lg {
    .about {
      margin: 84px 14px;
    }
    .text {
      @include text-m-l4;
    }
  }
</style>
