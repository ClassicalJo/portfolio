<script lang="ts"></script>

<p class="title">
  <slot />
</p>

<style lang="scss">
  @use '../scss/mixins.scss';
  .title {
    @include mixins.gradientText;
    font-size: 30px;
    filter: drop-shadow(2px 2px grey);
  }
</style>
