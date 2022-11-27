<script lang="ts">
  export let onClick: () => void
  export let left = false
  export let right = false
</script>

<button class:left class:right class="button left" on:click={onClick}>
  <svg width="20" height="40" viewBox="0 0 20 40">
    <slot />
    <path
      transform={`rotate(${left ? 180 : 0} 10 20)`}
      fill="black"
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
  .button {
    position: absolute;
    top: calc(50% - 20px);
    height: 40px;
    border: 0px;
    background: transparent;
    cursor: pointer;
    opacity: 0.5;
  }
  .button:hover,
  .button:active {
    transition: opacity 0.3s ease;
    opacity: 1;
  }
  .left {
    left: 10px;
  }
  .right {
    right: 10px;
  }
</style>
