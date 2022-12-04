<script lang="ts">
  import Slide from '../common/Slide.svelte'
  import Card from './Card.svelte'
  import Form from './Form.svelte'
  import Picture from './Picture.svelte'
</script>

<Slide target="about" index={1}>
  <div class="about relative flex">
    <Picture />
    <Card>
      <Form />
    </Card>
  </div>
</Slide>

<style lang="scss">
  @use '../scss/global.scss' as *;
  @use '../scss/breakpoints.scss';
  @use './values.scss';
  .about {
    margin: 124px 44px;
    min-height: 100vh;
  }
  @include breakpoints.lg {
    .about {
      margin: 84px 14px;
    }
  }
</style>
