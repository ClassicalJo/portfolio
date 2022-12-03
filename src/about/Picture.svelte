<script lang="ts"></script>

<div class="container">
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
  .container {
    display: inline;
    width: 500px;
    height: 500px;
    padding: 15px;
    float: right;
    border-radius: 10px;
    background-color: white;
    filter: drop-shadow(2px 2px 3px $black);
    transform: rotate(25deg);
  }
  @include breakpoints.md {
    .container {
      width: 250px;
      height: 1000px;
    }
    .pictures {
      clear: both;
    }
    .picture {
      float: left;
    }
  }
</style>
