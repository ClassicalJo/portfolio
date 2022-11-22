<script lang="ts">
  import '../scss/base.scss'
  import Visual from './Visual.svelte'
</script>

<footer class="footer flex flex-1">
  <Visual />
  <div class="column flex-1 flex-column flex">
    <p>Cosa numero 1</p>
    <p>Cosa numero 2</p>
  </div>
</footer>

<style lang="scss">
  footer {
    position: relative;
    bottom: 0px;
    width: 100%;
    height: 300px;
    background: rgb(214, 2, 112);    
    background: linear-gradient(
      90deg,
      rgba(214, 2, 112, 0.3) 0%,
      rgba(155, 79, 150, 0.3) 50%,
      rgba(0, 56, 168, 0.3) 100%
    );
    backdrop-filter: blur(10px);
  }


</style>
