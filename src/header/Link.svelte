<script lang="ts">
  import type { SectionName } from '../common/Scroller'
  export let onClick: () => void
  export let current: SectionName
  export let name: SectionName
  $: isCurrent = current === name
</script>

<div class="link flex-1 flex flex-column center" aria-current={isCurrent}>
  <button class="button relative" on:click={onClick} aria-label="Go to section">
    <slot />
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

  @include breakpoints.md {
    .link {
      padding: calc($headerOuterHeight/2) 0;
    }
  }
</style>
