<script lang="ts">
  export let title: string
  export let index: number
  const right = index % 2 === 0
</script>

<h1 class="title" class:hidden={!index} class:right>
  {title}
</h1>

<style lang="scss">
  .title {
    position: absolute;
    width: 100%;
    height: 100%;
    font-size: 256px;
    color: #202c39;
    opacity: 0.2;
    writing-mode: vertical-lr;
  }
  .hidden {
    display: none;
  }
  .right {
    writing-mode: vertical-rl;
  }
</style>
