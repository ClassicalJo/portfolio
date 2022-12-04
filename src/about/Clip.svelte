<img class="clip absolute" alt="a clip holding the photos" src="./clip.png" />

<style lang="scss">
  @use '../scss/global.scss' as *;
  @use '../scss/breakpoints.scss';
  .clip {
    width: 35px;
    right: 250px;
    top: -10px;
    transform: rotate(-10deg);
    clip-path: polygon(100% 0%, 100% 10%, 80% 10%, 90% 100%, 0% 100%, 0% 0%);
    z-index: 3;
  }
  @include breakpoints.lg {
    .clip {
      transform: rotate(10deg);
      width: 25px;
      top: -10px;
      right: 20px;
    }
  }
</style>
