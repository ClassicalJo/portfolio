<script lang="ts">
  import '../scss/base.scss'
</script>

<div class="container relative flex flex-1 flex-column">
  <img class="absolute cloud" src="./cloud.png" alt="" />
  <p class="logo">ClassicalJo</p>
</div>

<style lang="scss">
  @use '../scss/global.scss' as *;
  @use '../scss/breakpoints.scss';
  .container {
    order: -1;
  }
  .cloud {
    position: absolute;
    mix-blend-mode: darken;
    width: 200px;
    height: auto;
  }
  .logo {
    font-family: Alexandria;
    margin: 15px 10px;
    @include text-d-l3;
  }
  @include breakpoints.lg {
    .container {
      position: absolute;
      width: 50%;
    }
  }
</style>
