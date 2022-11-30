<script lang="ts"></script>

<p class="title">
  <slot />
</p>

<style lang="scss">
  @use '../scss/global.scss' as *;

  .title {
    @include gradientText;
    font-size: 30px;
    filter: drop-shadow(2px 2px grey);
  }
</style>
