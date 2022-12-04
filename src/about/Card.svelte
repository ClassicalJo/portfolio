<script lang="ts"></script>

<div class="wrapper">
  <div class="card relative ">
    <slot />
  </div>
</div>

<style lang="scss">
  @use '../scss/breakpoints.scss';
  @use './values.scss';
  .wrapper {
    filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.5));
    width: 100%;
  }
  .card {
    flex: 1 1 75%;
    min-height: 100vw;
    background-color: papayawhip;
    border-radius: 0px 0px 20px 20px;
    padding: values.$marginY values.$marginX;
    margin: 20px;
    clip-path: polygon(
      0px 50px,
      50px 0px,
      300px 0px,
      350px 50px,
      100% 50px,
      100% 100%,
      0% 100%
    );
  }
  @include breakpoints.lg {
    .card {
      margin-left: 50px;
    }
  }
</style>
