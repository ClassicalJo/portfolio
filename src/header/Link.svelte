<script lang="ts">
  export let onClick: () => void
  import { keyDown } from '../common/utils'
</script>

<div class="link flex flex-column center">
  <div
    role="button"
    aria-label="Go to section"
    tabindex="0"
    on:click={onClick}
    on:keydown={keyDown(onClick)}
  >
    <slot />
  </div>
</div>

<style lang="scss">
  @use '../scss/mixins.scss';
  .link {
    @include mixins.gradientText;
    font-size: 24px;
    cursor: pointer;
  }
</style>
