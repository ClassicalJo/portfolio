<script>
  import Form from './Form.svelte'
  import Slide from '../common/Slide.svelte'
    import Card from './Card.svelte'
</script>

<Slide target="contact" index={3} slide={false}>
  <div class="contact flex flex-1 relative">
    <div class="flex flex-1 wrapper">
      <Card />
      <Form />
    </div>
  </div>
</Slide>

<style lang="scss">
  @use '../scss/breakpoints.scss' as breakpoints;  
  @use '../scss/global.scss' as *;
  .contact {
    margin: 88px 44px;    
    align-items: center;
    justify-content: center;
  }
  .wrapper {    
    border-radius: 5px;
    padding: 20px;
    background: $gradientHeader;
    gap: 20px;
    max-width: 1200px;
  }
  @include breakpoints.md {
    .wrapper {
      flex-direction: column;
    }
  }
  @include breakpoints.lg {
    .contact {
      margin: 0px 14px;
    }    
    .note {
      margin-bottom: 120px;
    }
  }  

</style>
