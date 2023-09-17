<script lang="ts">
  export let tags: string[] = []
</script>

<p class="tags">
  related tags:
  {#each tags as tag}
    <span class="tag">{tag}</span><span>{' '}</span>
  {/each}
</p>

<style lang="scss">
  @use '../scss/global.scss' as *;
  @use '../scss/breakpoints.scss';
  .tags {
    @include text-d-l5;
    margin-bottom: 28px;
    color: rgba(50, 50, 50, 1);
  }
  @include breakpoints.lg {
    .tags {
      color: white;
      text-align: right;
    }
  }
</style>
