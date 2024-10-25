<script lang="ts">
  import { scrollDown } from '../common/store'
  import Collapsible from './Collapsible.svelte'
  import Logo from './Logo.svelte'
  import Menu from './Menu.svelte'
  import { toggleExpanded } from './collapsibleState'
  let initialHide = $state(true)
  $effect(() => {
    if (!$scrollDown) initialHide = false
  })
</script>

<header class="header relative" class:hide={$scrollDown} class:show={!$scrollDown}>
  <Collapsible hide={$scrollDown} />
  <div class="header-container flex flex-1 relative" class:initialHide>
    <Logo />
    <Menu onClick={toggleExpanded} />
  </div>
</header>

<style lang="scss">
  @use '../scss/global.scss' as *;
  @use '../scss/breakpoints.scss';

  .header {
    position: fixed;
    width: 100%;
    z-index: 99;
  }

  .header-container {
    width: 100%;
    z-index: 15;
    height: $headerOuterHeight;
    align-items: center;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);
    background: $gradientHeader;
  }

  .show {
    animation: scaleUp 0.3s ease forwards;
  }
  .hide {
    animation: scaleDown 0.3s ease forwards;
  }
  .initialHide {
    opacity: 0;
  }

  @include breakpoints.md {
    .header {
      flex-direction: column;
    }
  }
</style>
