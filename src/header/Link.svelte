<script lang="ts">
  export let onClick: () => void
  export let current: boolean
</script>

<div class="link flex flex-column center" aria-current="step" class:current>
  <button class="button" on:click={onClick} aria-label="Go to section">
    <slot />
  </button>
</div>

<style lang="scss">
  @use '../scss/global.scss' as *;
  @use '../scss/breakpoints.scss';
  .link {
    position: relative;
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
  .button {
    @include link-button;
    font-size: 18px;
    font-family: Noto Sans JP;
    color: white;
    text-shadow: 2px 2px $black;
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
