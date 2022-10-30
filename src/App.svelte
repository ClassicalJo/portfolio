<script lang="ts">
  import Background from './background/Background.svelte'
</script>

<main>
  <Background red={true} green={false} blue={false} />
</main>

<style>
  main {
    overflow: hidden;
    height: 100vh;
    width: 100vw;
  }
</style>
