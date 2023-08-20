<script lang='ts'>
    export let onClick: () => void;    
    export let icon: string;
    export let backgroundColor: string;    
    $: cssVarStyles = `--bg-color:${backgroundColor}`
</script>
<button class="button clear flex-1 center flex" on:click|preventDefault={onClick} style={cssVarStyles}>
    <div class='flex-1 flex center'>
    <img class='icon' src={icon} alt="">
</div>
</button>

<style lang="scss">    
  @use '../scss/breakpoints.scss';
  @use '../scss/global.scss' as *;
  .icon {
    width:20px; 
    height: 20px;        
    filter: drop-shadow(0px 0px 1px rgba(0,0,0,.2))    
  }
  .button {
    @include button;
    @include text-d-l4;
    border-radius: 5px;
    height: 49px;
    text-shadow: 0 0 1px white;
    background-color: var(--bg-color);
    
  }
</style>