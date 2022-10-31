<script lang="ts">
  import Background from './background/Background.svelte'
  import Container from './common/Container.svelte'
  import Home from './home/Home.svelte'
  let currentIndex = 0
  const observationHandler = (int: number) => {
    console.log(int - currentIndex)
    currentIndex = int
  }
</script>

<main>
  <Background red={true} green={false} blue={false} />
  <Container>
    <Home index={0} onObservation={observationHandler} />
    <Home index={1} onObservation={observationHandler} />
    <Home index={2} onObservation={observationHandler} />
    <Home index={3} onObservation={observationHandler} />
    <Home index={4} onObservation={observationHandler} />
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
