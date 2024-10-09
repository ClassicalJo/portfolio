<script lang="ts">
  export let onClick: () => void
  const translate = [0, 16, 32]
</script>

<button class="menu relative" on:click={onClick}>
  <svg
    class="icon"
    xmlns="http://www.w3.org/2000/svg"
    width="35"
    viewBox="0 0 50 40"
    preserveAspectRatio="xMidYMid meet"
  >
    <animate
      id="trigger"
      attributeName="fill"
      from="transparent"
      to="transparent"
      begin="click"
    />
    {#each translate as offsetY}
      <line
        transform={`translate(0 ${5 + offsetY})`}
        x1="5"
        x2="45"
        stroke="white"
        stroke-linecap="round"
        stroke-width="3px"
      >
        <animate
          attributeName="stroke"
          values="white;rgba(155, 79, 150); white"
          begin="trigger.begin+{(offsetY / 50) * 0.1}s"
          dur=".5s"
        />
      </line>
    {/each}
  </svg>
</button>

<style lang="scss">
  @use '../scss/global.scss' as *;
  @use '../scss/breakpoints.scss';
  .menu {
    display: none;
    cursor: pointer;
  }
  .icon {
    color: white;
    margin: 0;
    display: block;
    min-height: 100%;
  }
  @include breakpoints.md {
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
