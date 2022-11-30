<script lang="ts">
  import { keyDown } from '../common/utils'
  export let onClick: () => void
</script>

<div
  class="menu"
  role="button"
  tabindex="0"
  on:click={onClick}
  on:keydown={keyDown(onClick)}
>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -5 50 40">
    <path
      fill="black"
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
</div>

<style lang="scss">
  @use '../scss/breakpoints.scss';
  .menu {
    display: none;
    margin: 10px;
    padding: 6px;
    border-radius: 5px;
    background-color: white;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  @include breakpoints.lg {
    .menu {
      display: block;
      position: relative;
      border-radius: 5px;
      box-shadow: 2px 2px rgba(0, 0, 0, 0.3);
      cursor: pointer;
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
    }

    .menu:active:after {
      box-shadow: 0 0 0 0 white;
      position: absolute;
      border-radius: 5px;
      left: 0;
      top: 0;
      opacity: 1;
      transition: 0s;
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
</style>
