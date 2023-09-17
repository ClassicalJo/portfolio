<script>
  import Form from './Form.svelte'
  import Slide from '../common/Slide.svelte'
  import Card from './Card.svelte'
</script>

<Slide target="contact" index={3} slide={false}>
  <div class="contact flex flex-1 relative">
    <div class="flex flex-1 background">
      <div class="flex flex-1 card">
        <div class="flex flex-1 wrapper wrapper-card">
          <Card />
        </div>
      </div>
      <div class="flex flex-1 wrapper wrapper-form">
        <Form />
      </div>
    </div>
  </div>
</Slide>

<style lang="scss">
  @use '../scss/breakpoints.scss' as breakpoints;
  @use '../scss/global.scss' as *;
  .contact {
    padding: 124px 44px;
    align-items: center;
    justify-content: center;
  }
  .background {
    background: $gradientHeader;
    max-width: 1200px;
  }
  .wrapper {
    border-radius: 5px;
    padding: 20px;
    gap: 20px;
  }
  @include breakpoints.md {
    .card {
      align-items: center;
      justify-content: center;
    }
    .background {
      flex-direction: column;
      max-width: 500px;
      gap: 248px;
      background: none;
    }
    .wrapper-card {
      max-width: 300px;
    }
    .wrapper-form {
      background: $gradientHeader;
      max-width: 500px;
    }
  }
  @include breakpoints.lg {
    .contact {
      margin: 88px 14px;
      padding: 0;
    }
  }
</style>
