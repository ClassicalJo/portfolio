<script lang="ts">
  import Link from './Link.svelte'
  export let expanded: boolean
  export let sections: { link: () => void; current: boolean; title: string }[]
</script>

<nav class="navbar relative flex flex-1" class:expanded class:collapsed={!expanded}>
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
  @include breakpoints.lg {
    .navbar {
      flex-direction: column;
      max-height: 100vh;
    }
    .expanded {
      height: 100vh;
      min-height: 100vh;
      transition: all 0.5s ease, opacity 0.5s;
    }
    .collapsed {
      visibility: hidden;
      opacity: 0;
      height: 0vh;
      max-height: 0vh;
      min-height: 0vh;
      transition: visibility 0s ease 1s, min-height 0.75s $easeOutQuart, opacity 0.5s ease;
    }
  }
</style>
