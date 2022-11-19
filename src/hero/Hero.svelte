<script lang="ts">
  import { onMount } from 'svelte'
  import { setObservable } from '../common/setObservable'
  import Slide from '../common/Slide.svelte'
  import { visibleHero } from '../common/store'
  import '../scss/base.scss'
  import Pretitle from './Pretitle.svelte'
  import Title from './Title.svelte'
  let card: HTMLElement
  onMount(() => {
    const observer = setObservable(
      () => visibleHero.set(true),
      () => visibleHero.set(false),
      { threshold: 0 }
    )
    observer && observer.observe(card)
    return () => observer && observer.unobserve(card)
  })
</script>

<Slide index={0}>
  <div class="flex h-100">
    <div class="h-100 flex-1 flex center">
      <div bind:this={card} class="text-wrapper flex">
        <div class="title-wrapper flex align-left">
          <Title />
          <Pretitle />
        </div>
      </div>
    </div>
  </div>
</Slide>

<style lang="scss">
  @use '../scss/mixins.scss';
  .h-100 {
    height: 100%;
  }
  .text-wrapper::before {
    @include mixins.beforeAbsolute;
    @include mixins.borderRadius20;
    background: linear-gradient(
      338deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 255, 255, 0.5) 100%
    );
    mask-image: linear-gradient(338deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
    background-image: url('public/prism.png');
    background-repeat: repeat;
    -webkit-mask-image: linear-gradient(
      338deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.3) 100%
    );
  }
  .text-wrapper {
    @include mixins.borderRadius20;
    position: relative;
    backdrop-filter: blur(10px);
    padding: 25px;
  }
  .title-wrapper::before {
    @include mixins.beforeAbsolute;
  }
  .title-wrapper {
    @include mixins.borderRadius20;
    position: relative;
    border: 2px dashed rgba(255, 255, 255, 0.2);
    width: 550px;
    height: 350px;
    padding: 50px;
  }
</style>
