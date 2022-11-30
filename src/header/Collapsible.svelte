<script lang="ts">
  import { getContext } from 'svelte'
  import type { ScrollTargetKey } from '../common/Scroller'
  import { key, Scroller } from '../common/Scroller'
  import { visibleHero } from '../common/store'
  import '../scss/base.scss'
  import Link from './Link.svelte'
  import Menu from './Menu.svelte'

  let collapsed = true
  let collapsing = false
  let timeout: NodeJS.Timeout
  $: {
    if ($visibleHero) collapsed = true
  }

  function showMenu(value: boolean) {
    if (collapsing) {
      clearTimeout(timeout)
      collapsing = false
    }
    if (value) {
      collapsing = true
      timeout = setTimeout(() => {
        collapsing = false
      }, 1000)
    }
    collapsed = value
  }

  let scroller = getContext<Scroller>(key)
  function goTo(target: ScrollTargetKey) {
    return () => {
      showMenu(true)
      scroller.go(target)
    }
  }
</script>

<div class="collapsible flex flex-1" class:expanded={!collapsed} class:collapsing>
  <Menu onClick={() => showMenu(!collapsed)} />
  <nav class="navbar" class:collapsed class:hiding={collapsing}>
    <Link onClick={goTo('home')}>Home</Link>
    <Link onClick={goTo('about')}>About me</Link>
    <Link onClick={goTo('projects')}>Projects</Link>
    <Link onClick={goTo('contact')}>Contact</Link>
  </nav>
</div>

<style lang="scss">
  @use '../scss/global.scss' as *;
  .collapsible {
    flex: 1;
    flex-direction: row;
    height: 64px;
    overflow: hidden;
  }

  .collapsible::before {
    @include beforeAbsolute;
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
    pointer-events: none;
  }
  .navbar {
    flex: 1;
    display: flex;
  }
  @media all and (max-width: 800px) {
    .collapsible {
      flex-direction: column;
      align-items: flex-end;
    }
    .collapsed {
      display: none;
    }
    .navbar {
      width: 100%;
      flex: 1;
      flex-direction: column;
    }
    .expanded {
      height: 100vh;
      transition: height 1s cubic-bezier(0.22, 1, 0.36, 1);
    }
    .collapsing {
      height: 64px;
      transition: height 1s cubic-bezier(0.22, 1, 0.36, 1);
    }
    .hiding {
      opacity: 0;
      transition: opacity 0.3s ease;
      display: inherit;
    }
  }
</style>
