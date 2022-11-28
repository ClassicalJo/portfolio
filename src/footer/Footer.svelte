<script lang="ts">
  import '../scss/base.scss'
  import Visual from './Visual.svelte'
</script>

<footer class="footer flex flex-1 flex-column center">
  <div class="wrapper">
    <Visual />
    <div class="column flex-1 flex-column flex">
      <a class="link" href="https://github.com/classicaljo/portfolio"
        >See this repository on Github!</a
      >
    </div>
  </div>
</footer>

<style lang="scss">
  .footer {
    bottom: 0px;
    width: 100vw;
    background: rgb(214, 2, 112);
    background: linear-gradient(
      90deg,
      rgba(214, 2, 112, 0.3) 0%,
      rgba(155, 79, 150, 0.3) 50%,
      rgba(0, 56, 168, 0.3) 100%
    );
    backdrop-filter: blur(10px);
  }
  .wrapper {
    padding: 20px;
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
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
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
</style>
