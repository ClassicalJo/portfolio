<script lang="ts">
  interface Props {
    href: string;
    src: string;
    alt: string;
  }

  let { href, src, alt }: Props = $props();
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
