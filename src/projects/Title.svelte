<script lang="ts"></script>

<p class="title">
  <slot />
</p>

<style lang="scss">
  @use '../scss/global.scss' as *;
  @use '../scss/breakpoints.scss';
  .title {
    @include text-d-l3;
    color: white;
    font-family: Alexandria;
    font-weight: 500;
    margin-bottom: 28px;
  }
  @include breakpoints.md {
    .title {
      @include text-m-l3;
    }
  }
</style>
