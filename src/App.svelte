<script lang="ts">
  import { setContext } from 'svelte'
  import Background from './background/Background.svelte'
  import { key, Scroller } from './common/Scroller'
  import Footer from './footer/Footer.svelte'
  import Header from './header/Header.svelte'
  import Hero from './hero/Hero.svelte'
  import Home from './home/Home.svelte'
  import Projects from './projects/Projects.svelte'
  setContext(key, new Scroller())
</script>

<main>
  <Background />
  <Header />
  <Hero />
  <Home target="about" index={1} />
  <Projects />
  <Home target="contact" index={3} />
</main>

<style>
  main {
    overflow-x: hidden;
  }
</style>
