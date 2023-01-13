<script lang="ts">
  import Lobo from '../footer/Lobo.svelte'
  import '../scss/base.scss'
</script>

<div class="flex-1 shadow">
  <Lobo width={39} height={39} />
</div>

<style lang="scss">
  @use '../scss/breakpoints.scss';
  .shadow {
    filter: drop-shadow(2.5px 2.5px 0px rgba(0, 0, 0, 0.3));
    margin: 0px 44px
  }
  @include breakpoints.md {
    .shadow {
      margin: 0px 14px
    }
    
  }
</style>
