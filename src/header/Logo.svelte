<script lang="ts">
  import '../scss/base.scss'
</script>

<div class="container flex flex-1 flex-column">
  <p class="logo">ClassicalJo</p>
</div>

<style lang="scss">
  @use '../scss/mixins.scss';
  .container {
    justify-content: center;
  }
  .logo {
    font-size: 32px;
    @include mixins.gradientText;
  }
</style>
