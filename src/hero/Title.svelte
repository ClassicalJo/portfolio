<script lang="ts"></script>

<div class="wrapper">
  <img class="cloud" src="./cloud.png" width="833" height="263" alt="" />
  <h1 class="hero-title">ClassicalJo</h1>
</div>

<style lang="scss">
  @use '../scss/global.scss' as *;
  @use '../scss/breakpoints.scss';
  .wrapper {
    position: relative;
    margin: 25px;
  }
  .cloud {
    mix-blend-mode: darken;
    width: 825px;
    position: absolute;
    top: -50px;
    left: -50px;
  }

  .hero-title {
    @include text-d-l1;
    color: #555;
    mix-blend-mode: multiply;
    margin: 25px 0;
  }
  @include breakpoints.md {
    .hero-title {
      @include text-m-l1;
      margin: 10px 0px;
    }
    .cloud {
      width: 525px;
      top: -35px;
      left: -35px;
      height: auto;
    }
  }
  @include breakpoints.sm {
    .hero-title {
      @include text-m-l2;
      margin: 0px;
    }
    .cloud {
      width: 225px;
      top: -20px;
      left: -17.5px;
    }
  }
</style>
