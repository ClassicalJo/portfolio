<script>
  import Form from './Form.svelte'
  import Slide from '../common/Slide.svelte'
</script>

<Slide target="contact" index={3}>
  <div class="contact center flex flex-column flex-1">
    <div class="form flex flex-1 flex-column center">
      <Form />
    </div>
  </div>
</Slide>

<style lang="scss">
  .contact {
    min-height: 100vh;
  }
  .form {
    color: white;
    min-width: 300px;
  }
</style>
