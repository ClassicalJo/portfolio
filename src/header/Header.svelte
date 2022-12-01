<script lang="ts">
  import { visibleHero } from '../common/store'
  import { translate } from '../common/transitions'
  import Collapsible from './Collapsible.svelte'
  import Logo from './Logo.svelte'
</script>

<header class="header-container flex flex-1">
  {#if !$visibleHero}
    <div class="header flex flex-1" transition:translate>
      <Logo />
      <Collapsible />
    </div>
  {/if}
</header>

<style lang="scss">
  @use '../scss/global.scss' as *;
  @use '../scss/breakpoints.scss';
  .header-container {
    position: fixed;
    width: 100%;
    z-index: 5;
  }
  .header {
    background: $gradientFooter;
    backdrop-filter: $backdropBlur;
    min-height: 64px;
  }
  @include breakpoints.lg {
    .header {
      flex-direction: column;
    }
  }
</style>
