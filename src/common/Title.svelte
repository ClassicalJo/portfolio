<script lang="ts">
  interface Props {
    title: string;
    index: number;
  }

  let { title, index }: Props = $props();
  const right = index % 2 === 0
</script>

<h1 class="title" class:right>
  {title}
</h1>

<style lang="scss">
  @use '../scss/breakpoints.scss';
  .title {
    position: absolute;
    width: 100%;
    height: 100%;
    font-size: 256px;
    color: #202c39;
    opacity: 0.2;
    writing-mode: vertical-lr;
    text-align: center;
    pointer-events: none;
  }
  .right {
    writing-mode: vertical-rl;
  }
  @include breakpoints.lg {
    .title {
      font-size: 44px;
    }
  }
</style>
