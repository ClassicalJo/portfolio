<script lang="ts"></script>

<div class="card flex-column flex-1 flex relative">
  <slot />
</div>

<style lang="scss">
  @use '../scss/breakpoints.scss';
  .card {
    display: inline;
  }
</style>
