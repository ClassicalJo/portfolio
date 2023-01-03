<script lang="ts"></script>

<div class="flex-column flex">
  <p class='pre-title'>Howdy! I'm</p>
  <div class="flex">
    <h1 class="hero-title">ClassicalJo</h1>
  </div>
  <p class="block">
    And I am a fullstack developer based in Argentina, striving for pixel perfect digital
    experiences. Currently breaking barriers as chapter lead @Scalemote.
  </p>
</div>

<style lang="scss">
  @use "sass:color";
  @use '../scss/global.scss' as *;
  @use '../scss/breakpoints.scss';
  .pre-title, .block {
    @include text-d-l4;
    font-family: Noto Sans JP;
  }
  .pre-title {
    color: color.scale($black, $saturation: 100%)
  }
  .hero-title {
    position: relative;
    font-family: Alexandria;
    pointer-events: none;
    @include text-d-l1;
    background-image: url('./cloud.png');
    background-position: center;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(0px 0px 4px $black);
    margin: 20px 0px 30px 0px;
  }
  .block {
    color: $black;
    max-width: 540px;
    font-family: Nunito Sans;
  }

  @include breakpoints.md {
    .hero-title {
      @include text-m-l1;
      margin: 10px 0px 15px 0px;
      filter: drop-shadow(0px 0px 2px $black);
    }
    .block, .pre-title {
      @include text-m-l4;
    }
  }
</style>
