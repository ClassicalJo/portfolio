<script lang="ts">
  import Lobo from '../footer/Lobo.svelte'
  import '../scss/base.scss'
</script>

<div class="flex-1 shadow flex">
  <Lobo width={39} height={39} />
</div>

<style lang="scss">
  @use '../scss/global.scss' as *;
  @use '../scss/breakpoints.scss';
  .shadow {
    filter: drop-shadow(2.5px 2.5px 0px rgba(0, 0, 0, 0.3));
    padding-left: 44px;
    align-items: center;
  }
  @include breakpoints.md {
    .shadow {
      min-height: $headerOuterHeight;
      padding-left: 14px;
    }
  }
</style>
