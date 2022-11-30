<script lang="ts">
  import '../scss/base.scss'
</script>

<div class="container flex flex-1 flex-column">
  <p class="logo">ClassicalJo</p>
</div>

<style lang="scss">
  @use '../scss/global.scss' as *;
  @use '../scss/breakpoints.scss';
  .container {
    justify-content: center;
    order: -1;
  }
  .logo {
    font-size: 32px;
  }
  @media all and (max-width: 800px) {
    .container {
      position: absolute;
      height: 64px;
      width: 50%;
    }
  }
</style>
