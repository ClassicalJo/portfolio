<script lang="ts">
  export let onClick: () => void
</script>

<div class="wrapper flex-1">
  <button class="nav-button" on:click={onClick}>
    <slot />
  </button>
</div>

<style lang="scss">
  .wrapper {
    position: relative;
  }
  .nav-button:before {
    content: ' ';
    position: absolute;
    border-top: 1px solid white;
    z-index: -1;
    top: 50%;
    left: -25px;
    width: 25px;
    right: 0;
  }
  .nav-button {
    position: relative;
    padding: 12px 24px;
    font-size: 24px;
    font-weight: 600;
    width: 250px;
    background-color: rgba(255, 255, 255, 0.3);
    border: 0;
    border-left: 1px solid white;
    border-radius: 0px 20px 0px 0px;
    text-align: center;
    cursor: pointer;
    color: black;
    transition: background-color 0.2s ease;
  }
  .nav-button:active {
    background-color: rgba(0, 0, 0, 0.4);
  }
  .nav-button:hover {
    background-color: rgba(255, 255, 255, 0.8);
    transition: background-color 0.2s ease;
  }
</style>
