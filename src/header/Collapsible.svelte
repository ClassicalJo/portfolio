<script lang="ts">
  import { getContext } from 'svelte'
  import type { ScrollTargetKey } from '../common/Scroller'
  import { key, Scroller } from '../common/Scroller'
  import { currentSection } from '../common/store'
  import Menu from './Menu.svelte'
  import NavBar from './NavBar.svelte'

  let expanded = false
  const expand = (value: boolean) => (expanded = value)

  let scroller = getContext<Scroller>(key)
  const goTo = (target: ScrollTargetKey) => () => {
    expand(false)
    scroller.go(target)
  }

  let renderSections: [ScrollTargetKey, string][] = [
    ['home', 'Home'],
    ['about', 'About me'],
    ['projects', 'Projects'],
    ['contact', 'Contact']
  ]
  $: sections = renderSections.map(([section, title]) => ({
    title,
    link: goTo(section),
    current: $currentSection === section
  }))
</script>

<div class="collapsible flex flex-1 flex-column">
  <Menu onClick={() => expand(!expanded)} />
  <NavBar {expanded} {sections} />
</div>

<style lang="scss">
  @use '../scss/global.scss' as *;
  @use '../scss/breakpoints.scss';
  @use "sass:math";
  .collapsible {
    max-width: 478px;    
  }
  @include breakpoints.md {
    .collapsible {
      max-width:100vw;              
    }
  }
</style>
