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
    order: -1;
  }
  .logo {
    font-size: 32px;
    @include mixins.gradientText;
  }
  @media all and (max-width: 800px) {
    .container {
      position: absolute;
      height: 64px;
      width: 50%;
    }
  }
</style>
