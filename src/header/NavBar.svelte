<script lang="ts">
  import { getContext } from 'svelte'
  import { Scroller, scrollerKey, type SectionName, Section } from '../common/Scroller'
  import images from '../assets/images'
  import Link from './Link.svelte'
  import type { Writable } from 'svelte/store'
  import { sectionKey } from '../common/store'
  import { horizontalScale } from '../common/transitions'
  export let expand: () => void
  export let expanded: boolean
  let scroller = getContext<Scroller>(scrollerKey)
  let currentSection = getContext<Writable<SectionName>>(sectionKey)

  const goTo = (target: Section) => () => {
    expand()
    scroller.go(target.sectionName)
  }
</script>

<nav
  class="navbar flex flex-1"
  class:nav-expanded={expanded}
  class:nav-collapsed={!expanded}
  aria-hidden={!expanded}
  style="--dynamic-bg-image: url({images.card});"
>
  <div class="card flex-1 flex" class:expanded class:collapsed={!expanded}>
    {#each Object.entries(scroller.targets) as [_, section]}
      {@const selected = section.sectionName === $currentSection}
      <Link onClick={goTo(section)} name={section.sectionName} current={$currentSection}>
        <div class="flex center flex-1">
          <div class="flex center flex-1 flex-col">
            <div class="relative">
              <p>{section.title}</p>
              {#if selected}
                <div
                  class="flex-1 underline"
                  transition:horizontalScale
                  aria-hidden="true"
                />
              {/if}
            </div>
          </div>
        </div>
      </Link>
    {/each}
  </div>
</nav>

<style lang="scss">
  @use '../scss/global.scss' as *;
  @use '../scss/breakpoints.scss';
  .navbar {
    overflow-y: hidden;
  }

  .underline {
    @include beforeAbsolute;
    border-bottom: 1px solid rgba(255, 255, 255, 0.8);
    top: 0.5px;
  }

  @include breakpoints.md {
    .navbar {
      min-height: 100vh;
    }

    .nav-expanded {
      background-color: rgba(0, 0, 0, 0.8);
      transition: background-color 0.3s ease;
    }

    .nav-collapsed {
      background-color: rgba(0, 0, 0, 0);
      transition: background-color 0.3s ease;
      pointer-events: none;
    }

    .expanded {
      transition: all 0.3s ease;
      box-shadow: 1px 1px 1px $black;
      max-height: $headerOuterHeight;
    }

    .card {
      overflow-y: hidden;
      flex-direction: row;
      position: relative;
      border-radius: 0 0 10px 10px;
      background-image: var(--dynamic-bg-image);
    }

    .card::before {
      @include beforeAbsolute;
      background: $purple;
      opacity: 0.4;
      pointer-events: none;
    }

    .collapsed {
      max-height: 0;
      transition: max-height 0.3s ease;
    }
  }

  @include breakpoints.sm {
    .expanded {
      max-height: 240px;
    }
    .card {
      overflow-y: hidden;
      flex-direction: column;
      position: relative;
      border-radius: 0 0 10px 10px;
      background-image: var(--dynamic-bg-image);
    }
  }
</style>
