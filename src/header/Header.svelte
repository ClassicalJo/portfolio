<script lang="ts">
  import { visibleHero } from '../common/store'
  import Visibility from '../common/Visibility.svelte'
  import '../scss/base.scss'
  import Link from './Link.svelte'
  import Logo from './Logo.svelte'
</script>

<header class="header-container flex flex-1">
  <Visibility show={!$visibleHero}>
    <div class="header flex">
      <Logo />
      <nav class="flex-1 flex">
        <Link target="hero">Home</Link>
        <Link target="about">About me</Link>
        <Link target="projects">Projects</Link>
        <Link target="contact">Contact</Link>
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
    height: 64px;
    width: 100%;
    z-index: 999;
    flex: 1;
    max-width: 1900px;
  }
  .header {
    backdrop-filter: blur(10px);
    height: 100%;
    flex: 1;
    position: relative;
  }
</style>
