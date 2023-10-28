<script lang="ts">
  import { getContext } from 'svelte'
  import { Scroller, scrollerKey, type SectionName, Section } from '../common/Scroller'

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

<nav class="navbar flex flex-1" class:expanded class:collapsed={!expanded}>
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
    .expanded {
      max-height: $headerOuterHeight;
      transition: all 0.15s;
    }
    .collapsed {
      visibility: hidden;
      max-height: 0vh;
      transition: all 0.15s ease;
    }
  }
</style>
