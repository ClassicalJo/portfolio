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

<svelte:head>
  <meta charset="UTF-8" />
  <meta name="theme-color" content="#111" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
  <link
    href="https://fonts.googleapis.com/css2?family=Alexandria&family=Noto+Sans&family=Nunito+Sans:wght@300;500&display=swap"
    rel="stylesheet"
  />
  <title>Jose Barrientos</title>
  <meta
    name="description"
    content="C'est moi! classicalJo, currently crafting cascades of code at Scalemote as a Chapter Lead. With creativity, charisma and curiousity, I connect and collaborate with my crew to create cutting-edge applications. Currently working with React, Svelte, Nest and Typescript."
  />
  <meta property="og:title" content="Jose Barrientos" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://classicaljo.github.io/portfolio" />
  <meta
    property="og:image"
    content="https://user-images.githubusercontent.com/55909151/278907201-eaf35df1-3537-42d5-84cd-87b94785edfc.png"
  />
  <meta
    property="og:description"
    content="C'est moi! classicalJo, currently crafting cascades of code at Scalemote as a Chapter Lead. With creativity, charisma and curiousity, I connect and collaborate with my crew to create cutting-edge applications. Currently working with React, Svelte, Nest and Typescript."
  />
</svelte:head>

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
