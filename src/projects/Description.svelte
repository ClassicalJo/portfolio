<script lang="ts">
  interface Props {
    description: string;
  }

  let { description }: Props = $props();
</script>

<div class="wrapper flex-1 flex">
  <p class="description">
    {description}
  </p>
</div>

<style lang="scss">
  @use '../scss/global.scss' as *;
  @use '../scss/breakpoints.scss';

  .description {
    @include text-d-l4;
    font-family: Nunito Sans, sans-serif;
    font-weight: 300;
    padding: 28px 0;
    color: rgba(50, 50, 50, 1);
  }
  @include breakpoints.lg {
    .wrapper {
      flex: 1;
      align-items: end;
      justify-content: end;
    }
    .description {
      @include text-m-l4;
      color: white;
      max-width: 484px;
      text-align: right;
    }
  }
</style>
