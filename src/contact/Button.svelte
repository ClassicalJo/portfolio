<script lang="ts">
  import type { Snippet } from 'svelte'
  interface Props {
    onClick: () => void
    children: Snippet
  }
  let touch = $state(false)
  let setTouch = (val: boolean) => (touch = val)
  let { onClick, children }: Props = $props()
</script>

<button
  class="button clear flex-1 center flex"
  class:touch
  onclick={onClick}
  onpointerenter={() => setTouch(true)}
  onpointerleave={() => setTouch(false)}
>
  <div class="flex-1 flex center">
    {@render children?.()}
  </div>
</button>

<style lang="scss">
  @use '../scss/breakpoints.scss';
  @use '../scss/global.scss' as *;
  @use 'sass:color';
  .button {
    @include button;
    @include text-d-l4;
    border-radius: 5px;
    height: 49px;
    text-shadow: 0 0 1px white;
    background-color: var(--bg-color);
    transition: background-color 0.3s;
  }
  .touch {
    background-color: var(--bg-hover-color);
    transition: background-color 0.3s;
  }
</style>
