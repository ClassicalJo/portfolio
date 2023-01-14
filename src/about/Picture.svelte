<script lang="ts">
</script>

<div class="picture-wrapper flex center">
  <div class="picture-container">
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
</div>

<style lang="scss">
  @use '../scss/global.scss' as *;
  @use '../scss/breakpoints.scss';
  @use './values.scss';
  .picture-wrapper {
    margin: calc(values.$imageHeight / 2) 0;
  }
  .image {
    background-image: url('./joe.jpg');
    background-size: values.$imageWidth values.$imageHeight;
    width: values.$imageWidth;
    height: values.$imageHeight;
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
  .picture-container {
    padding: values.$padding;
    border-radius: 10px;
    background-color: white;
    filter: drop-shadow(2px 2px 3px $black);
    width: values.$containerWidth;
    height: values.$containerHeight;
    transform: rotate(7.5deg);
  }
  @include breakpoints.md {
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
    .picture-container {
      width: values.$smallContainerWidth;
      height: values.$smallContainerHeight;
    }
  }
</style>
