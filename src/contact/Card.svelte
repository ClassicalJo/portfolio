<script lang="ts">
  import icons from '../assets/icons'
  import Lobo from '../footer/Lobo.svelte'
</script>

<div class="flex flex-1 flex-column card">
  <div class="flex flex-1 flex-column">
    <h2 class="title">Hey there!</h2>
    <hr />
    <p class="content">
      Use the following form to send me an email and I'll answer you as soon as possible.
      Thanks!
    </p>
  </div>
  <div class="flex flex-1 lobo">
    <Lobo width={50} height={50} />
  </div>
</div>

<style lang="scss">
  @use '../scss/breakpoints.scss' as breakpoints;
  @use '../scss/global.scss' as *;
  .lobo {
    align-items: end;
    justify-content: end;
    filter: invert(1);
    opacity: 0.2;
  }
  .card {
    background: $gradientInput;
    border-radius: 10px;
    padding: 14px;
    min-height: 175px;
    color: rgba(50, 50, 50, 1);
  }
  .content {
    @include text-d-l4;
  }
  @include breakpoints.md {
    .content {
      @include text-m-l4;
    }
  }
</style>
