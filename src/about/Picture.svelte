<script lang="ts">
  import images from '../assets/images'
</script>

<div class="picture-wrapper flex center">
  <div class="picture-container">
    <div class="wrapper">
      <div class="image pictures green" style="background-image:url({images.joe})" />
      <div class="image pictures blue" style="background-image:url({images.joe})" />
    </div>
    <div class="wrapper">
      <div class="image pictures red" style="background-image:url({images.joe})" />
      <img
        class="picture pictures"
        src={images.joe}
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
  .image {
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
  @include breakpoints.sm {
    .image {
      background-image: url(images.joe);
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
