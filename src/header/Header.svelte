<script lang="ts">
  import { scrollDown } from '../common/store'
  import Collapsible from './Collapsible.svelte'
  import Logo from './Logo.svelte'
</script>

<header
  class="header-container flex flex-1"
  class:hide={$scrollDown}
  class:show={!$scrollDown}
>
  <div class="header flex flex-1">
    <Logo />
    <Collapsible />
  </div>
</header>

<style lang="scss">
  @use '../scss/global.scss' as *;
  @use '../scss/breakpoints.scss';

  .header-container {
    position: fixed;
    width: 100%;
    z-index: 5;
    min-height: $headerOuterHeight;
    background: $gradientHeader;
    align-items: center;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
    transform: scaleY(0);
  }
  .header {
    min-height: $headerOuterHeight;
  }
  .show {
    animation: scaleUp 0.3s ease forwards;
  }
  .hide {
    animation: scaleDown 0.3s ease forwards;
  }

  @include breakpoints.md {
    .header {
      flex-direction: column;
    }
  }
</style>
