<script lang="ts">
  import { setContext } from 'svelte'
  import Background from './background/Background.svelte'
  import Container from './common/Container.svelte'
  import { key, Scroller } from './common/Scroller'
  import Header from './header/Header.svelte'
  import Hero from './hero/Hero.svelte'
  import Home from './home/Home.svelte'
  import Projects from './projects/Projects.svelte'
  setContext(key, new Scroller())
</script>

<main>
  <Background />
  <Header />
  <Container>
    <Hero />
    <Home target="about" index={1} />
    <Projects />
    <Home target="contact" index={3} />
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
