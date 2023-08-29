<script lang="ts">
  import '../scss/base.scss'
  import Socials from './Socials.svelte'
  import Visual from './Visual.svelte'
</script>

<footer class="footer flex flex-1">
  <div class="flex flex-1 content">
    <div class="flex flex-1 flex-column wrapper center">
      <Visual />
      <a class="link" href="https://github.com/classicaljo/portfolio"
        >See this repository on Github!</a
      >
    </div>
    <div class="column flex-1 flex-column flex">
      <Socials />
    </div>
  </div>
</footer>

<style lang="scss">
  @use '../scss/global.scss' as *;
  @use '../scss/breakpoints';
  .footer {
    bottom: 0px;
    width: 100vw;
    min-height: 440px;
    background: rgb(214, 2, 112);
    background: $gradientFooter;
    justify-content: center;
  }
  .content {
    padding: 20px;
  }
  .wrapper {
    border-right: 1px solid white;
    flex: 1 1 400px;
  }
  .link {
    color: inherit;
    position: relative;
    font-size: 15px;
    font-weight: 500;
    text-align: center;
    text-decoration: none;
    background-color: white;
    border-radius: 20px;
    padding: 5px 10px;
    box-shadow: $shadow-box-3;
  }
  .link:visited {
    color: inherit;
  }

  .link:after {
    content: '';
    display: block;
    position: absolute;
    border-radius: 20px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 0.3s;
    box-shadow: 0 0 15px 30px white;
  }

  .link:active:after {
    box-shadow: 0 0 0 0 white;
    position: absolute;
    border-radius: 20px;
    left: 0;
    top: 0;
    opacity: 1;
    transition: 0s;
    background-color: rgba(0, 0, 0, 0.1);
  }
  .column {
    flex: 1 1 66%;
  }
  @include breakpoints.md {
    .content {
      flex-direction: column;
    }
    .wrapper {
      border-right: 0px;
      border-bottom: 1px solid white;
    }
    .column {
      flex: 0;
      padding-top: 20px;
    }
  }
</style>
