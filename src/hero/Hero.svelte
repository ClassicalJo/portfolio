<script lang="ts">
  import Slide from '../common/Slide.svelte'
  import Pretitle from './Pretitle.svelte'
  import Subtext from './Subtext.svelte'
  import Title from './Title.svelte'
</script>

<Slide index={0}>
  <div class="flex h-100">
    <div class="content h-100 flex-1 flex center">
      <div class="text-wrapper align-left flex">
        <Pretitle />
        <Title />
        <Subtext />
      </div>
    </div>
  </div>
</Slide>

<style>
  .flex {
    display: flex;
  }
  .center {
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .align-left {
    justify-content: center;
    flex-direction: column;
  }
  .flex-1 {
    flex: 1;
  }
  .h-100 {
    height: 100%;
  }
  .content {
    height: 100%;
    color: white;
  }
  .text-wrapper {
    border-radius: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 100px;
    aspect-ratio: 1/1;
  }
</style>
