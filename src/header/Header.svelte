<script lang="ts">
  import Collapsible from './Collapsible.svelte'
  import Logo from './Logo.svelte'
</script>

<header class="header-container flex flex-1">
  <div class="header flex flex-1">
    <!-- <Collapsible /> -->
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
  }
  .header {
    background: $gradientFooter;
    backdrop-filter: $backdropBlur;
    height: $headerInnerHeight;
  }
  @include breakpoints.lg {
    .header {
      flex-direction: column;
    }
  }
</style>
