<script lang="ts"></script>

<div class="flex container">
  <h4 class="pretitle">Fullstack Developer</h4>
</div>

<style lang="scss">
  @use '../scss/global.scss' as *;
  @use '../scss/breakpoints.scss';
  .container {
    margin: 25px;
  }
  .pretitle {
    @include text-d-l2;
    font-family: Noto Sans JP;
    letter-spacing: -2px;
    margin: 0px 5px;
    color: black;
    mix-blend-mode: lighten;
  }

  @include breakpoints.md {
    .pretitle {
      @include text-m-l2;
    }
  }
  @include breakpoints.sm {
    .container {
      margin: 5px 20px;
    }
    .pretitle {
      font-size: 20px;
    }
  }
</style>
