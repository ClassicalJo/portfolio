<script lang="ts">
  import '../scss/base.scss'
</script>

<div class="container relative flex flex-1 flex-column">
  <p class="logo">ClassicalJo</p>
</div>

<style lang="scss">
  @use '../scss/global.scss' as *;
  @use '../scss/breakpoints.scss';
  .container {
    margin: 12.5px 15px;
    align-items: flex-start;
  }

  .logo {
    font-family: Alexandria;
    pointer-events: none;
    mix-blend-mode: screen;
    @include text-d-l2;
    z-index: 3;
    color: $black;
    background-image: url('./cloud.png');
    background-position: center;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(0px 0px 3.5px $black);
  }
</style>
