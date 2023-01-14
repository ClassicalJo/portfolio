<script lang="ts">
</script>

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
    background-size: values.$imageWidth values.$imageHeight;
    width: values.$imageWidth;
    height: values.$imageHeight;
    background-size: contain;
  }
  .picture {
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
    margin: values.$marginY values.$marginX;
    width: values.$containerWidth;
    height: values.$containerHeight;
    padding: values.$padding;
    border-radius: 10px;
    background-color: white;
    filter: drop-shadow(2px 2px 3px $black);
    transform: rotate(15deg);
    z-index: 5;
  }
  @include breakpoints.lg {
    .pictures {
      clear: both;
    }
    .picture {
      float: left;
    }
  }
  @include breakpoints.lg {
    .image {
      background-image: url('./joe.jpg');
      background-size: values.$smallImageWidth values.$smallImageHeight;
      background-size: contain;
    }
    .picture,
    .image {
      width: values.$smallImageWidth;
      height: values.$smallImageHeight;
    }
    .container {
      width: values.$longContainerWidth;
      height: values.$longContainerHeight;
      top: 4px;
      transform: rotate(2deg);
    }
  }
</style>
