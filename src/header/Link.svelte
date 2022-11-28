<script lang="ts">
  export let onClick: () => void
  import { keyDown } from '../common/utils'
</script>

<div
  class="link flex flex-column center"
  role="button"
  aria-label="Go to section"
  tabindex="0"
  on:click={onClick}
  on:keydown={keyDown(onClick)}
>
  <div class="button">
    <slot />
  </div>
</div>

<style lang="scss">
  .link {
    cursor: pointer;
    position: relative;
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    user-select: none;
  }
  .link:last-child {
    border-right: 1px solid rgba(255, 255, 255, 0.5);
  }
  .link:hover {
    background-color: rgba(255, 255, 255, 0.3);
    transition: background-color 0.3s ease;
  }
  .link:active {
    background-color: rgba(0, 0, 0, 0.3);
  }
  .button {
    font-size: 18px;
    font-family: Alexandria;
    color: white;
    text-shadow: 2px 2px black;
  }
  @media all and (max-width: 800px) {
    .link {
      border-left: 0;
    }
    .link:last-child {
      border-right: 0;
    }
  }
</style>
