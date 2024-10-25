<script lang="ts">
  import type { SectionName } from '../common/Scroller'
  interface Props {
    onClick: () => void;
    current: SectionName;
    name: SectionName;
    children?: import('svelte').Snippet;
  }

  let {
    onClick,
    current,
    name,
    children
  }: Props = $props();
  let isCurrent = $derived(current === name)
</script>

<div class="link flex-1 flex flex-column center" aria-current={isCurrent}>
  <button class="button relative" onclick={onClick} aria-label="Go to section">
    {@render children?.()}
  </button>
</div>

<style lang="scss">
  @use '../scss/global.scss' as *;
  @use '../scss/breakpoints.scss';
  .button {
    @include link-button;
    font-size: 18px;
    font-family:
      Nunito Sans,
      sans-serif;
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
    .button {
      color: white;
      filter: drop-shadow(1.5px 1.5px 0px $black);
    }
  }
</style>
