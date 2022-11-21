<script lang="ts">
  import { getContext } from 'svelte'
  import type { ScrollTargetKey } from '../common/Scroller'
  import { key, Scroller } from '../common/Scroller'
  import '../scss/base.scss'
  export let target: ScrollTargetKey
  let scroller = getContext<Scroller>(key)
  const onClick = () => scroller.go(target)
</script>

<div class="link flex flex-column center">
  <div role="button" on:click={onClick} aria-label="Go to section" on:keydown={onClick}>
    <slot />
  </div>
</div>

<style lang="scss">
  @use '../scss/mixins.scss';
  .link {
    @include mixins.gradientText;
    font-size: 24px;
    cursor: pointer;
  }
</style>
