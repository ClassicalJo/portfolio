<script lang="ts">
  import { horizontalScale } from '../common/transitions'
  export let onClick: () => void
  export let current: boolean
</script>

<div class="link flex-1 flex flex-column center" aria-current={current}>
  <button class="button relative" on:click={onClick} aria-label="Go to section">
    <slot />
    {#if current}
      <div class="selected flex center" transition:horizontalScale aria-hidden="true">
        <slot />
      </div>
    {/if}
  </button>
</div>

<style lang="scss">
  @use '../scss/global.scss' as *;
  @use '../scss/breakpoints.scss';
  .button {
    @include link-button;
    font-size: 18px;
    font-family: Nunito Sans;
    font-weight: 500;
    color: white;
    filter: drop-shadow(1px 1px 0px $black);
  }
  .link {
    position: relative;
    overflow: hidden;
    user-select: none;
  }

  .link:hover {
    @include link-hover;
  }
  .link:active {
    @include link-active;
  }

  .selected {
    overflow: hidden;
    @include beforeAbsolute;
    text-decoration: underline;
    color: transparent;
    text-decoration-color: white;
    filter: drop-shadow(0.5px 0.5px 0px $black);
    text-underline-offset: 5.5px;
    text-decoration-thickness: 1px;
    white-space: nowrap;
  }
</style>
