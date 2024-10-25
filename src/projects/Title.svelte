<script lang="ts">
  import icons from '../assets/icons'
  interface Props {
    github: string;
    deploy: string;
    children?: import('svelte').Snippet;
  }

  let { github, deploy, children }: Props = $props();
</script>

<div class="flex wrapper">
  <p class="flex-1 title">
    {@render children?.()}
  </p>
  <div class="flex icon-zone">
    <a
      class="flex center"
      href={deploy}
      target="_blank"
      rel="noreferrer noopener"
      title="Go to the deploy"
    >
      <img class="icon" alt="Play button" src={icons.deploy} />
    </a>
    <a
      class="flex center"
      href={github}
      target="_blank"
      rel="noreferrer noopener"
      title="Go to the github repository"
    >
      <img class="icon" alt="Logo of Github" src={icons.github} />
    </a>
  </div>
</div>

<style lang="scss">
  @use '../scss/global.scss' as *;
  @use '../scss/breakpoints.scss';
  $textColor: rgba(50, 50, 50, 1);
  .title {
    font-weight: 500;
    @include text-m-l3;
  }
  .wrapper {
    padding-bottom: 10px;
    border-bottom: 1px solid $textColor;
    color: $textColor;
  }

  .icon-zone {
    gap: 0.5em;
    /* filter: invert(1); */
  }
  .icon {
    width: 25px;
    height: 25px;
    opacity: 0.7;
    filter: invert(1);
  }
  .icon:hover,
  .icon:active {
    opacity: 1;
    transition: opacity 0.15s ease;
  }

  @include breakpoints.lg {
    .title {
      color: rgba(225, 225, 225, 1);
    }
    .wrapper {
      border-bottom: 1px solid rgba(225, 225, 225, 1);
    }
    .icon {
      filter: none;
    }
  }
</style>
