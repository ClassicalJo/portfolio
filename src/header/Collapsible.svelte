<script lang="ts">
  import NavBar from './NavBar.svelte'
  import { expanded, resetExpandedIfHidden, toggleExpanded } from './collapsibleState'
  interface Props {
    hide: boolean
  }

  let { hide }: Props = $props()
  document.addEventListener(
    'scroll',
    () => $expanded && resetExpandedIfHidden(true),
    true
  )
  $effect(() => {
    resetExpandedIfHidden(hide)
  })
</script>

<div class="flex flex-1 flex-column collapsible">
  <NavBar expanded={$expanded} expand={toggleExpanded} />
</div>

<style lang="scss">
  @use '../scss/global.scss' as *;
  @use '../scss/breakpoints.scss';
  @use 'sass:math';
  .collapsible {
    position: absolute;
    top: 0;
    right: 0;
    width: 50vw;
    z-index: 100;
    height: $headerOuterHeight;
  }

  @include breakpoints.md {
    .collapsible {
      position: fixed;
      top: $headerOuterHeight;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
    }
  }
</style>
