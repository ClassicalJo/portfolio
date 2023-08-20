<script lang="ts">
  import Link from './Link.svelte'
  import socials from './socials'
</script>

<div class="socials flex">
  {#each socials as link}
    <Link src={link.src} alt={link.alt} href={link.href} />
  {/each}
</div>
