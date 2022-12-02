<script lang="ts">
  import { horizontalScale } from '../common/transitions'
  export let onClick: () => void
  export let current: boolean
</script>

<div class="link flex flex-column center" aria-current={current}>
  <button class="button relative" on:click={onClick} aria-label="Go to section">
    <slot />
    {#if current}
      <div class="selected center" transition:horizontalScale aria-hidden="true">
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
    font-family: Noto Sans JP;
    color: white;
    filter: drop-shadow(1.5px 1.5px $black);
  }
  .link {
    position: relative;
    overflow: hidden;
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    user-select: none;
  }
  .link:last-child {
    border-right: 1px solid rgba(255, 255, 255, 0.5);
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
    text-underline-offset: 5.5px;
    text-decoration-thickness: 1px;
    white-space: nowrap;
  }

  @include breakpoints.lg {
    .link {
      border-left: 0;
    }
    .link:last-child {
      border-right: 0;
    }
  }
</style>
