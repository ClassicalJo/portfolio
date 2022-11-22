<script lang="ts">
  import '../scss/base.scss'
  import Lobo from './Lobo.svelte'
</script>

<div class="flex flex-column visual">
  <div class="svg-wrapper">
    <Lobo />
  </div>
  <div class="text-wrapper ">
    <p class="text">ClassicalJo</p>
  </div>
</div>

<style lang="scss">
  .visual {
    margin: 20px;    
    align-items: center;
    justify-content: center;
  }
  .text {
    font-size: 20px;
    letter-spacing: 1px;
    text-shadow: 3px 3px black;
    text-align: center;
    color: white;
  }
  .svg-wrapper {    
    
    align-items: center;    
  }
</style>
