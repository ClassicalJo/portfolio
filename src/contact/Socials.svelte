<script lang="ts">
  import Link from './Link.svelte'
  let links = [
    {
      src: 'mail.svg',
      href: 'mailto:jb.barrientos@yahoo.com',
      alt: 'My e-mail address'
    },
    {
      src: 'linkedin.svg',
      href: 'https://www.linkedin.com/in/classicaljo/',
      alt: 'Linkedin Profile'
    },
    { src: 'github.svg', href: 'https://github.com/classicaljo', alt: 'Github Profile' }
  ]
</script>

<div class="socials flex">
  {#each links as link}
    <Link src={link.src} alt={link.alt} href={link.href} />
  {/each}
</div>

<style lang="scss">
  .socials {
    width: 100%;
  }
</style>
