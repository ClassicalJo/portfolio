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
  .header-container::after {
    @include beforeAbsolute;
    content: '';
    pointer-events: none;
    background-color: transparent;
    box-shadow:0px 2px 5px rgba(0,0,0,0.5)
  }
  .header {    
    height: $headerInnerHeight;
  }

  @include breakpoints.md {
    .header {
      flex-direction: column;      
    }
  }
</style>
