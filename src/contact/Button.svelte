<script lang="ts">
  export let onClick: () => void
  export let backgroundColor: string
  export let hoverColor: string
  let touch = false
  const setTouch = (val: boolean) => (touch = val)
</script>

<button
  class="button clear flex-1 center flex"
  class:touch
  on:click|preventDefault={onClick}
  on:pointerenter={() => setTouch(true)}
  on:pointerleave={() => setTouch(false)}
  style="--bg-color: {backgroundColor}; --bg-hover-color: {hoverColor}"
>
  <div class="flex-1 flex center">
    <slot />
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
    transition: background-color 0.15s;
  }
  .touch {
    background-color: var(--bg-hover-color);
    transition: background-color 0.15s;
  }
</style>
