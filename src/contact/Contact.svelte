<script>
  import Slide from '../common/Slide.svelte'
  import Socials from './Socials.svelte'
</script>

<Slide target="contact" index={3}>
  <div class="contact center flex flex-column flex-1">
    <div class="form flex flex-1 flex-column center">
      <div class="wrapper flex flex-column center">
        <input class="input" type="text" placeholder="Your name" />
        <input class="input" type="text" placeholder="Your e-mail address" />
        <textarea class="area flex-1" placeholder="Write me something!" />
        <Socials />
      </div>
    </div>
  </div>
</Slide>

<style lang="scss">
  @use '../scss/breakpoints.scss';
  @use '../scss/global.scss' as *;
  @use 'sass:color';
  .contact {
    min-height: 100vh;
  }
  .form {
    color: white;
    min-width: 300px;
  }
  .input,
  .area {
    box-sizing: border-box;
    width: 100%;
    background-color: transparent;
    color: white;
    border-radius: 10px;
    border: 10px double white;
    padding: 20px;
    @include text-d-l4;
    font-family: Noto Sans JP;
  }
  .wrapper {
    padding: 20px;
    border-radius: 10px;
    background: linear-gradient(blueviolet, color.scale(blueviolet, $blackness: 30%));
    max-height: 550px;

    filter: drop-shadow(2px 2px 5px black);
    gap: 20px;
  }
  .input::placeholder,
  .area::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
</style>
