<script lang="ts"></script>

<div class="background">
  <div class="wrapper ">
    <div class="wrapper ">
      <img
        class="picture"
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
  .wrapper,
  .background {
    right: 100px;
    top: 100px;
    position: relative;
    background-image: url('./joe.jpg');
    background-repeat: no-repeat;
    background-size: contain;
    filter: hue-rotate(90deg);
  }
  .picture {
    position: relative;
    right: 100px;
    top: 100px;
    filter: hue-rotate(90deg);
  }
  .wrapper {
    z-index: -1;
  }
  .background {
    right: 0px;
  }
</style>
