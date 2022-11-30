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
    <Link onClick={goTo('about')} color="rgba(214, 2, 112, 1)">About me</Link>
    <Link onClick={goTo('projects')} color="rgba(155, 79, 150, 1)">Projects</Link>
    <Link onClick={goTo('contact')} color="rgba(0, 56, 168, 1)">Contact</Link>
  </nav>
</div>

<style lang="scss">
  .navbar-wrapper {
    position: relative;
  }
  .navbar {
    margin-top: 0px;
    gap: 10px;
    position: relative;
  }
</style>
