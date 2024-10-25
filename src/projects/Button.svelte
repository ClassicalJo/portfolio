<script lang="ts">
  interface Props {
    onClick: () => void;
    left?: boolean;
    right?: boolean;
    children?: import('svelte').Snippet;
  }

  let {
    onClick,
    left = false,
    right = false,
    children
  }: Props = $props();
</script>

<button class="button" onclick={onClick}>
  <svg
    class:left
    class:right
    class="chevron"
    width="20"
    height="40"
    viewBox="0 0 20 40"
    preserveAspectRatio="none"
  >
    {@render children?.()}
    <path
      transform={`rotate(${left ? 180 : 0} 10 20)`}
      fill="currentColor"
      d="
      M 0.00,0.00
      C 0.00,0.00 5.00,0.00 5.00,0.00
        5.00,0.00 20.00,20.00 20.00,20.00
        20.00,20.00 5.00,40.00 5.00,40.00
        5.00,40.00 0.00,40.00 0.00,40.00
        0.00,40.00 0.00,35.00 0.00,35.00
        0.00,35.00 10.00,20.00 10.00,20.00
        10.00,20.00 0.00,5.00 0.00,5.00
        0.00,5.00 0.00,0.00 0.00,0.00 
      Z"
    />
  </svg>
</button>

<style lang="scss">
  @use '../scss/global.scss' as *;
  @use 'sass:color';
  .left {
    color: $red;
  }
  .right {
    color: $blue;
  }
  .chevron {
    height: 100%;
    width: 100%;
    filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.5));
  }
  .button:first-child {
    z-index: 10;
  }
  .button {
    @include button;
    cursor: pointer;
    height: 20px;
    width: 15px;
    z-index: 10;
  }
  .right:hover,
  .right:active,
  .left:hover,
  .left:active {
    color: color.scale($red, $lightness: 30%);
  }
  .right:hover,
  .right:active {
    color: color.scale($blue, $lightness: 30%);
  }
</style>
