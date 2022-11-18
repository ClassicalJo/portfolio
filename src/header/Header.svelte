<script lang="ts">
  import Logo from './Logo.svelte'
  import '../scss/base.scss'
  import { visibleHero } from '../common/store'
</script>

<header class="header flex" class:appear={!$visibleHero}>
  <Logo />
  <nav class="flex-1 flex">
    <p>Link1</p>
    <p>Link2</p>
    <p>Link3</p>
  </nav>
</header>

<style lang="scss">
  @use '../scss//mixins.scss';
  .header::before {
    @include mixins.beforeAbsolute;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
    background-image: url('public/prism.png');
    background-repeat: repeat;
    -webkit-mask-image: linear-gradient(
      338deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.3) 100%
    );
  }
  .header {
    position: absolute;
    width: 100vw;
    backdrop-filter: blur(10px);
    height: 64px;
    top: -64px;
  }
  .appear {
    top: 0;
  }
</style>
