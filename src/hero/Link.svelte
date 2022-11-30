<script lang="ts">
  export let onClick: () => void
  export let color: string
</script>

<div class="wrapper flex-1" style={`--link-color: ${color}`}>
  <button class="nav-button" on:click={onClick}>
    <slot />
  </button>
</div>

<style lang="scss">
  @use '../scss/global.scss' as *;
  @use '../scss/breakpoints.scss';
  .wrapper {
    position: relative;
  }
  .nav-button {
    font-family: Nunito Sans;
    color: black;
    background-color: rgba(255, 255, 255, 0.6);
    mix-blend-mode: lighten;
    border: 0px;
    font-weight: 200;
    border-left: 20px solid var(--link-color);
    border-radius: 0px 30px 30px 0px;
    padding: 15px 30px;
    cursor: pointer;
    @include text-d-l2;
    width: 300px;
  }
  .nav-button:hover {
    background-color: rgba(255, 255, 255, 0.8);
    transition: background-color 0.3s ease;
  }
  .nav-button:active {
    background-color: rgba(0, 0, 0, 0.1);
  }
  @include breakpoints.lg {
    .nav-button {
      @include text-m-l2;
    }
  }
</style>
