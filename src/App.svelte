<script lang="ts">
  import Background from './background/Background.svelte'
  import Container from './common/Container.svelte'
  import Home from './home/Home.svelte'
</script>

<main>
  <Background />
  <Container>
    <Home index={0} />
    <Home index={1} />
    <Home index={2} />
    <Home index={3} />
    <Home index={4} />
  </Container>
</main>

<style>
  main {
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-areas: 'container';
    grid-template-columns: 100%;
    grid-template-rows: 100%;
    overflow: hidden;
  }
</style>
