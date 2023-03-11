<script lang="ts">
  import Description from './Description.svelte'
  import Title from './Title.svelte'
  import Tags from './Tags.svelte'

  export let src: string
  export let alt: string
  export let tags: string[]
  export let id: number
  export let github: string
  export let deploy: string
  let loading = true
  const toggle = () => (loading = !loading)
</script>

<div class="item-container flex">
  <img class="background" width="800" height="800" on:load={toggle} {src} {alt} />
  <div class="item flex">
    <div class="flex flex-column column">
      <div class="flex flex-column flex-1 content">
        <Title {deploy} {github}>Project Title #{id}</Title>
        <Description />
        <Tags {tags} />
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  @use '../scss/breakpoints';
  @use 'sass:color';
  @use '../scss/global.scss' as *;
  .item-container {
    @include beforeAbsolute;
    background-color: white;
  }
  .content {
    padding: 56px;
  }
  .background {
    object-fit: cover;
    object-position: center;
  }
  .column {
    position: absolute;
    right: 0;
    width: 50%;
  }
  .item {
    position: absolute;
    right: 0;
    width: 100%;
    height: 100%;
    background: $gradientOverlay;
  }
  .background {
    position: absolute;
    width: 50%;
    height: 100%;
  }

  @include breakpoints.lg {
    .item,
    .background {
      @include beforeAbsolute;
    }
    .column {
      width: 100%;
    }
  }
  @include breakpoints.sm {
    .content {
      padding: 28px;
    }
  }
</style>
