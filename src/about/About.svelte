<script lang="ts">
  import Slide from '../common/Slide.svelte'
  import Card from './Card.svelte'
  import Picture from './Picture.svelte'
</script>

<Slide target="about" index={1}>
  <div class="about relative flex">
    <Picture />
    <Card>
      <p class="flex-1 text left">
        Name: Jose Barrientos <br />
        Age: 34 years old <br />
        City: Buenos Aires <br />
        Pronouns: he/him <br />
      </p>
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
  .text {
    @include text-d-l4;
    float: left;
    background-color: white;
    filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.3));
  }
  .text::before {
    content: '';
    width: values.$pictureWidth;
    height: values.$pictureHeight;
    float: right;
  }

  @include breakpoints.lg {
    .about {
      margin: 84px 14px;
    }
    .text {
      @include text-m-l4;
    }
    .text::before {
      width: values.$longPictureWidth;
      height: values.$longPictureHeight;
    }
  }
</style>
