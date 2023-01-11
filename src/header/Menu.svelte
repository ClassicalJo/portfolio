<script lang="ts">
  export let onClick: () => void
  const translate = [0, 16, 32]
</script>

<button class="menu relative" on:click={onClick}>
  <svg
    class="icon"
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 50 40"
  >
    {#each translate as offsetY}
      <path
        fill="currentColor"
        transform={`translate(0 ${offsetY})`}
        d="M 5.00,0.00
           C 0.00,0.00 0.00,5.00 0.00,5.00
             0.00,5.00 0.00,10.00 5.00,10.00
             10.00,10.00 45.00,10.00 45.00,10.00
             45.00,10.00 50.00,10.00 50.00,5.00
             50.00,0.00 45.00,0.00 45.00,0.00
             45.00,0.00 10.00,0.00 5.00,0.00 Z"
      />
    {/each}
  </svg>
</button>

<style lang="scss">
  @use '../scss/global.scss' as *;
  @use '../scss/breakpoints.scss';
  .menu {
    display: none;
  }
  .icon {
    border-radius: 2px;
    color: white;
    margin: 0;
    display: block;
  }
  @include breakpoints.lg {
    .menu {
      @include button;
      position: absolute;
      display: block;
      top: 0px;
      right: 0px;
      margin-right: 14px;
      height: $headerOuterHeight;
      box-sizing: border-box;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      filter: drop-shadow(2px 2px 0px rgba(0, 0, 0, 0.3));
    }
  }
</style>
