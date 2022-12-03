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
  @use './values.scss';
  .image {
    background-image: url('./joe.jpg');
    background-size: 250px;
    width: values.$imageWidth;
    height: values.$imageHeight;
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
    top: 0px;
    right: 0px;
    position: absolute;
    margin: values.$margin;
    width: values.$containerWidth;
    height: values.$containerHeight;
    padding: values.$padding;
    border-radius: 10px;
    background-color: white;
    filter: drop-shadow(2px 2px 3px $black);
  }
  @include breakpoints.lg {
    .container {
      width: values.$longContainerWidth;
      height: values.$longContainerHeight;
    }
    .pictures {
      clear: both;
    }
    .picture {
      float: left;
    }
  }
  @include breakpoints.md {
    .container {
      /* transform: rotate(0); */
    }
  }
</style>
