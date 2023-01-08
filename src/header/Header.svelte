<script lang="ts">
  import Lobo from '../footer/Lobo.svelte'
  import Collapsible from './Collapsible.svelte'
  import Logo from './Logo.svelte'
</script>

<header class="header-container flex flex-1">
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
    height: $headerOuterHeight;
    background: $gradientHero;
    backdrop-filter: $backdropBlur;
    align-items: center;
  }
  .header {
    margin: 0px 44px;
    height: $headerInnerHeight;
  }
  @include breakpoints.lg {
    .header {
      flex-direction: column;
    }
  }
  @include breakpoints.sm {
    .header {
      margin: 0px 14px;
    }
  }
</style>
