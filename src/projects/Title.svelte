<script lang="ts">
  import githubIcon from '../../public/github.svg'
  import chevron from '../../public/chevron.svg'
  export let github: string
  export let deploy: string
</script>

<div class="title flex">
  <p class="flex-1 text">
    <slot />
  </p>
  <div class="flex icon-zone">
    <a
      class="flex center"
      href={deploy}
      target="_blank"
      rel="noreferrer noopener"
      title="Go to the deploy"
    >
      <img class="icon" alt="Play button" src={chevron} />
    </a>
    <a
      class="flex center"
      href={github}
      target="_blank"
      rel="noreferrer noopener"
      title="Go to the github repository"
    >
      <img class="icon" alt="Logo of Github" src={githubIcon} />
    </a>
  </div>
</div>

<style lang="scss">
  @use '../scss/global.scss' as *;
  @use '../scss/breakpoints.scss';
  .title {
    @include text-d-l3;
    color: white;
    font-family: Alexandria;
    font-weight: 500;
    margin-bottom: 28px;
  }
  .text {
    margin-right: 1em;
  }
  .icon-zone {
    gap: 0.5em;
  }
  .icon {
    color: white;
    width: 25px;
    height: 25px;
    opacity: 0.7;
  }
  .icon:hover,
  .icon:active {
    opacity: 1;
    transition: opacity 0.15s ease;
  }

  @include breakpoints.md {
    .title {
      @include text-m-l3;
    }
  }
</style>
