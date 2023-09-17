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
  export let selected: boolean
  let loading = true
  const toggle = () => (loading = !loading)
</script>

<div class="item-container flex" class:selected>
  <img class="background" width="800" height="800" on:load={toggle} {src} {alt} />
  <div class="background overlay" />
  <div class="item flex flex-column">
    <div class="flex flex-column column center">
      <div class="card">
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
    background-color: transparent;
    opacity: 0;
  }
  .selected {
    opacity: 1;
  }

  .card {
    background: $gradientInput;
    border-radius: 10px;
    padding: 24px;
    min-height: 200px;
    z-index: 3;
  }

  .background {
    object-fit: cover;
    object-position: center;
    overflow: hidden;
    position: absolute;
    width: 66%;
    height: 100%;
    border: 1px solid rgba(50, 50, 50, 1);
    box-sizing: border-box;
  }
  .overlay {
    background: rgba(9, 0, 19, 0.75);
    z-index: 2;
    opacity: 1;
  }
  .overlay:hover,
  .overlay:active {
    opacity: 0.1;
  }
  .overlay,
  .overlay:hover,
  .overlay:active {
    transition: opacity 0.3s ease;
  }
  .column {
    position: absolute;
    height: 100%;
    right: 0;
    width: 50%;
  }
  .item {
    position: absolute;
    right: 0;
    width: 100%;
    height: 100%;
  }

  @include breakpoints.lg {
    .item,
    .background {
      @include beforeAbsolute;
    }

    .column {
      width: 100%;
      height: auto;
      align-items: stretch;
      justify-content: stretch;
    }
    .card {
      background: none;
    }
  }
</style>
