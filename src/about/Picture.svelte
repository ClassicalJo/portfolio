<script lang="ts"></script>

<div class="wrapper">
  <div class="image pictures green" />
  <div class="image pictures blue" />
</div>
<div class="wrapper">
  <div class="image pictures red" />
  <img
    class="picture pictures"
    src="./joe.jpg"
    width="250"
    height="250"
    alt="ClassicalJo, thats me, wearing a suit, glasses and an elephant-themed tie, looking at the camera"
  />
</div>

<style lang="scss">
  @use '../scss/global.scss' as *;
  @use '../scss/breakpoints.scss';
  .image {
    background-image: url('./joe.jpg');
    background-size: 250px;
    width: 250px;
    height: 250px;
  }
  .green {
    filter: hue-rotate(90deg);
  }
  .blue {
    filter: hue-rotate(180deg);
  }
  .red {
    filter: hue-rotate(270deg);
  }
  .pictures {
    float: right;
  }
  .wrapper {
    float: right;
    clear: both;
  }
  @include breakpoints.md {
    .pictures {
      clear: both;
    }
    .picture {
      float: left;
    }
  }
</style>
