<script lang="ts">
  import Menu from './Menu.svelte'
  import NavBar from './NavBar.svelte'

  let expanded = false
  const expand = () => (expanded = !expanded)
</script>

<div class="collapsible flex flex-1 flex-column">
  <Menu onClick={expand} />
  <NavBar {expanded} {expand} />
</div>

<style lang="scss">
  @use '../scss/global.scss' as *;
  @use '../scss/breakpoints.scss';
  @use 'sass:math';
  .collapsible {
    max-width: 478px;
  }
  @include breakpoints.md {
    .collapsible {
      max-width: 100vw;
    }
  }
</style>
