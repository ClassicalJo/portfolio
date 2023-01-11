<script lang="ts">
  import Collapsible from './Collapsible.svelte'
  import Logo from './Logo.svelte'
  import { scrollDown } from '../common/store'
  import { verticalScale } from '../common/transitions'
  import { cubicOut } from 'svelte/easing'
</script>

{#if !$scrollDown}
  <header
    class="header-container flex flex-1"
    transition:verticalScale={{ easing: cubicOut, duration: 500 }}
  >
    <div class="header flex flex-1">
      <Logo />
      <Collapsible />
    </div>
  </header>
{/if}

<style lang="scss">
  @use '../scss/global.scss' as *;
  @use '../scss/breakpoints.scss';
  .header-container {
    position: fixed;
    width: 100%;
    z-index: 5;
    height: $headerOuterHeight;
    background: $gradientHeader;
    backdrop-filter: $backdropBlur;
    align-items: center;
  }
  .header {
    margin: 0px 44px;
    height: $headerInnerHeight;
  }

  @include breakpoints.md {
    .header {
      flex-direction: column;
      margin: 0px 14px;
    }
  }
</style>
