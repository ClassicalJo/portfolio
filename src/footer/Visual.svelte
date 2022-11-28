<script lang="ts">
  import '../scss/base.scss'
  import Lobo from './Lobo.svelte'
</script>

<div class="flex flex-column visual">
  <div class="svg-wrapper">
    <Lobo />
  </div>
</div>

<style lang="scss">
  .visual {
    margin: 20px;
    align-items: center;
    justify-content: center;
  }

  .svg-wrapper {
    align-items: center;
  }
</style>
