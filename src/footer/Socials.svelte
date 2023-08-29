<script lang="ts">
  import Link from './Link.svelte'
  import socials from './socials'
</script>

<div class="socials flex flex-column flex-1">
  <div class="container flex flex-column">
    <div>
      <p class="text">
        © Copyright {new Date().getFullYear()} | classicalJo. All rights reserved
      </p>
      <ul>
        {#each socials as link}
          <li>
            <a class="text" href={link.href}>{link.name}</a>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</div>

<style lang="scss">
  @use '../scss/breakpoints.scss';
  ul {
    font-weight: 600;
    letter-spacing: 1px;
    list-style: inside;
    color: white;
    padding: 0;
  }
  .socials {
    justify-content: center;
  }
  .text {
    color: white;
    margin: 5px 0;
  }
  @include breakpoints.lg {
    .socials {
      align-items: center;
      justify-content: center;
    }
    .container {
      align-items: center;
      justify-content: center;
    }
  }
</style>
