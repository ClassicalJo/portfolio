<script lang="ts">
  export let onClick: () => void
</script>

<button class="menu relative" on:click={onClick}>
  <svg
    class="icon"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 50 40"
  >
    <path
      fill="currentColor"
      d="M 5.00,0.00
           C 0.00,0.00 0.00,5.00 0.00,5.00
             0.00,5.00 0.00,10.00 5.00,10.00
             10.00,10.00 45.00,10.00 45.00,10.00
             45.00,10.00 50.00,10.00 50.00,5.00
             50.00,0.00 45.00,0.00 45.00,0.00
             45.00,0.00 10.00,0.00 5.00,0.00 Z
           M 15.00,15.00
           C 10.00,15.00 10.00,20.00 10.00,20.00
             10.00,20.00 10.00,25.00 15.00,25.00
             20.00,25.00 45.00,25.00 45.00,25.00
             45.00,25.00 50.00,25.00 50.00,20.00
             50.00,15.00 45.00,15.00 45.00,15.00
             45.00,15.00 20.00,15.00 15.00,15.00 Z
           M 25.00,30.00
           C 20.00,30.00 20.00,35.00 20.00,35.00
             20.00,35.00 20.00,40.00 25.00,40.00
             30.00,40.00 45.00,40.00 45.00,40.00
             45.00,40.00 50.00,40.00 50.00,35.00
             50.00,30.00 45.00,30.00 45.00,30.00
             45.00,30.00 30.00,30.00 25.00,30.00 Z"
    />
  </svg>
</button>

<style lang="scss">
  @use '../scss/global.scss' as *;
  @use '../scss/breakpoints.scss';
  $lightPurple: scale-color($purple, $lightness: 20%);
  .menu {
    @include button;
    display: none;
    border-radius: 5px;
    margin: 12.5px;
    box-sizing: border-box;
    background-color: rgba(255, 255, 255, 0.9);
    border: 2.5px solid $purple;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    mix-blend-mode: overlay;
    filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.3));
  }
  .icon {
    border-radius: 2px;
    color: $purple;
    padding: 5px;
    margin: 0;
    display: block;
    outline: 3px solid $purple;
  }
  @include breakpoints.lg {
    .menu {
      position: absolute;
      top: 0px;
      right: 0px;
      display: block;
      box-shadow: 2px 2px rgba(0, 0, 0, 0.3);
    }
    .menu:after {
      content: '';
      display: block;
      position: absolute;
      border-radius: 5px;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: all 0.3s;
      box-shadow: 0 0 5px 20px white;
      pointer-events: none;
    }
    .menu:active {
      border-radius: 0px;
    }
    .menu:active:after {
      box-shadow: 0 0 0 0 white;
      position: absolute;
      border-radius: 0px;
      left: 0;
      top: 0;
      opacity: 1;
      transition: 0s;
      background-color: rgba(255, 255, 255, 0.3);
    }
  }
</style>
