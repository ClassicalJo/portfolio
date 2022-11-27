<script lang="ts">
  import Description from './Description.svelte'
  import Title from './Title.svelte'

  export let src: string
  export let alt: string
  let loading = true
  const toggle = () => (loading = !loading)
</script>

<div class="grid">
  <img width="800" height="800" on:load={toggle} {src} {alt} />
  <div class="item flex">
    <div class="flex-1" />
    <div class="flex flex-column flex-1 content">
      <Title>Project Title #1</Title>
      <Description />
      <div class="action-zone">
        <input type="button" value="Link to Github" />
        <input type="button" value="Link to Deploy" />
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .grid {
    display: grid;
    grid-template-areas: main;
  }
  .item {
    backdrop-filter: grayscale(1);
    background-color: rgba(0, 255, 255, 0.1);
    grid-area: main;
  }
  img {
    grid-area: main;
    object-fit: cover;
  }
</style>
