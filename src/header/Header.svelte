<script lang="ts">
  import Logo from './Logo.svelte'
  import '../scss/base.scss'
  import { visibleHero } from '../common/store'
  import Visibility from '../common/Visibility.svelte'
  let visible = false
  let timeout: NodeJS.Timeout
  $: {
    clearTimeout(timeout)
    switch ($visibleHero) {
      case true: {
        timeout = setTimeout(() => {
          visible = false
        }, 1000)
        break
      }
      default: {
        visible = true
        break
      }
    }
  }
</script>

<header class="header-container flex">
  <Visibility show={!$visibleHero}>
    <div class="header flex">
      <Logo />
      <nav class="flex-1 flex">
        <p>Link1</p>
        <p>Link2</p>
        <p>Link3</p>
      </nav>
    </div>
  </Visibility>
</header>

<style lang="scss">
  @use '../scss/mixins.scss';
  .header::before {
    @include mixins.beforeAbsolute;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
    background-image: url('/prism.png');
    background-repeat: repeat;
    -webkit-mask-image: linear-gradient(
      338deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.3) 100%
    );
  }
  .header-container {
    position: absolute;
    width: 100vw;
    display: flex;
    height: 64px;
    z-index: 999;
  }
  .header {
    backdrop-filter: blur(10px);
    height: 100%;
    flex: 1;
    position: relative;
  }
</style>
