<script lang="ts">
  import Slide from '../common/Slide.svelte'
  import Pretitle from './Pretitle.svelte'
  import Title from './Title.svelte'
</script>

<Slide index={0}>
  <div class="flex h-100">
    <div class="content h-100 flex-1 flex center">
      <div class="text-wrapper flex">
        <div class="title-wrapper flex align-left">
          <Title />
          <Pretitle />
        </div>
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
    isolation: isolate;
  }
  .text-wrapper::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      338deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.2) 100%
    );

    border-radius: 20px;
    mask-image: linear-gradient(338deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
    background-image: url('public/prism.png');
    -webkit-mask-image: linear-gradient(
      338deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.2) 100%
    );
  }
  .text-wrapper {
    position: relative;
    backdrop-filter: blur(10px);
    border-radius: 20px;
    background-repeat: repeat;
    padding: 25px;
  }
  .title-wrapper::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* filter: blur(3px); */
  }
  .title-wrapper {
    position: relative;
    border: 2px dashed rgba(255, 255, 255, 0.2);
    width: 550px;
    height: 350px;
    padding: 50px;
    /* padding: 75px; */
    border-radius: 20px;

    opacity: initial;
    mask: none;
    -webkit-mask: none;
  }
</style>
