<script lang="ts">
  import '../scss/base.scss'
  import Visual from './Visual.svelte'
</script>

<footer class="footer flex flex-1 flex-column center">
  <div class="wrapper">
    <Visual />
    <div class="column flex-1 flex-column flex">
      <a href="http://github.com/classicaljo/portfolio">See this repository on Github!</a>
    </div>
  </div>
</footer>

<style lang="scss">
  .footer {
    bottom: 0px;
    width: 100vw;
    /* padding: 20px; */
    background: rgb(214, 2, 112);
    background: linear-gradient(
      90deg,
      rgba(214, 2, 112, 0.3) 0%,
      rgba(155, 79, 150, 0.3) 50%,
      rgba(0, 56, 168, 0.3) 100%
    );
    backdrop-filter: blur(10px);
  }
  .wrapper {
    padding: 20px;
  }
  .invisible {
    visibility: hidden;
  }
</style>
