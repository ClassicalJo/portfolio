<script lang="ts">
  import { setContext } from 'svelte'
  import About from './about/About.svelte'
  import Background from './background/Background.svelte'
  import { scrollerKey, Scroller } from './common/Scroller'
  import Footer from './footer/Footer.svelte'
  import Header from './header/Header.svelte'
  import Hero from './hero/Hero.svelte'
  import Contact from './contact/Contact.svelte'
  import Projects from './projects/Projects.svelte'
  import { createCurrentSection, sectionKey } from './common/store'

  setContext(scrollerKey, new Scroller())
  setContext(sectionKey, createCurrentSection())
</script>

<main>
  <Background />
  <Header />
  <Hero />
  <About />
  <Projects />
  <Contact />
  <Footer />
</main>

<style>
  main {
    overflow-x: hidden;
  }
</style>
