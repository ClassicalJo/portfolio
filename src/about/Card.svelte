<script lang="ts"></script>

<div class="card relative">
  <slot />
</div>

<style lang="scss">
  @use '../scss/breakpoints.scss';
  @use './values.scss';
  .card {
    min-height: 100vw;
    margin-left: 250px;
    background-color: papayawhip;
    padding: values.$margin;
    filter: drop-shadow(2px 2px 5px grey);
  }
  @include breakpoints.lg {
    .card {
      margin-left: 50px;
    }
  }
</style>
