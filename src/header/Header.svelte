<script lang="ts">
  import { visibleHero } from '../common/store'
  import '../scss/base.scss'
  import Collapsible from './Collapsible.svelte'
  import Logo from './Logo.svelte'
</script>

<header class="header-container flex flex-1">
  {#if !$visibleHero}
    <div class="header flex">
      <Collapsible />
      <Logo />
    </div>
  {/if}
</header>

<style lang="scss">
  .header-container {
    position: fixed;
    width: 100%;
    flex: 1;
    max-width: 1900px;
    z-index: 5;
  }
  .header {
    backdrop-filter: blur(10px);
    min-height: 64px;
    flex: 1;
    position: relative;
  }
</style>
