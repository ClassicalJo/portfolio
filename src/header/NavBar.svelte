<script lang="ts">
  import Link from './Link.svelte'
  export let expanded: boolean
  export let sections: { link: () => void; current: boolean; title: string }[]
</script>

<nav class="navbar flex flex-1" class:expanded class:collapsed={!expanded}>
  {#each sections as section}
    <Link onClick={section.link} current={section.current}>
      {section.title}
    </Link>
  {/each}
</nav>

<style lang="scss">
  @use '../scss/global.scss' as *;
  @use '../scss/breakpoints.scss';
  .navbar {
    overflow-y: hidden;
  }
  @include breakpoints.md {        
    .navbar{
      background: $gradientHeader;            
    }
    .expanded {               
      max-height: $headerOuterHeight;      
      transition: all 0.15s ;      
    }
    .collapsed {
      visibility: hidden;      
      max-height: 0vh;
      transition: all 0.15s ease;
    }
  }
</style>
