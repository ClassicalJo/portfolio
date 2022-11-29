<script lang="ts">
  import Link from './Link.svelte'
  import { getContext } from 'svelte'
  import type { ScrollTargetKey } from '../common/Scroller'
  import { key, Scroller } from '../common/Scroller'
  const scroller = getContext<Scroller>(key)
  const onClick = (target: ScrollTargetKey) => scroller.go(target)
  const goTo = (target: ScrollTargetKey) => () => onClick(target)
</script>

<div class="navbar-wrapper flex flex-1">
  <nav class="navbar flex flex-1 flex-column halftone">
    <Link onClick={goTo('about')}>About me</Link>
    <Link onClick={goTo('projects')}>Projects</Link>
    <Link onClick={goTo('contact')}>Contact</Link>
  </nav>
</div>

<style lang="scss">
  .navbar-wrapper {
    border-left: 1px solid white;
    border-bottom: 1px solid white;
    position: relative;
  }
  .navbar {
    margin: 25px;
    margin-top: 0px;
    gap: 10px;
    position: relative;
  }
</style>
