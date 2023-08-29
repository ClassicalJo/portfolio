<script lang="ts">
  export let href: string
  export let src: string
  export let alt: string
</script>

<div class="icon center">
  <a {href} target="_blank" rel="noopener noreferrer">
    <img class="img" height="50" width="50" {src} {alt} />
  </a>
</div>

<style lang="scss">
  .icon {
    border-radius: 100%;
  }
  .img {
    border-radius: 100%;
    padding: 10px;

    background-color: rgba(255, 255, 255, 0.1);
  }
</style>
