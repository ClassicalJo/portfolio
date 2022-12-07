<script lang="ts">
  import Socials from './Socials.svelte'
  import Loading from './Loading.svelte'
  import submit from './submit'
  import type { ISubmitEvent } from './submit'
  let promise: null | Promise<void> = null
  let form: HTMLFormElement
  let handleSuccess = () => {
    promise = Promise.resolve()
    setTimeout(() => (promise = null), 2000)
  }
  let handleError = (err: Error) => {
    console.error(err.message)
    promise = Promise.reject()
    setTimeout(() => (promise = null), 2000)
  }
  let handleSubmit = (e: ISubmitEvent) => {
    promise = submit(e, handleSuccess, handleError)
  }
</script>

<form
  bind:this={form}
  class="wrapper flex flex-column center"
  action="https://formspree.io/f/moqbgdqb"
  method="POST"
  on:submit={handleSubmit}
>
  <input class="input" type="text" name="email" placeholder="Your e-mail address" />
  <textarea class="area flex-1" name="message" placeholder="Write me something!" />
  <div class="submit-area">
    {#if !promise}
      <button class="submit" type="submit">Send!</button>
    {:else}
      {#await promise}
        <Loading />
      {:then}
        <p>Form sent!</p>
      {:catch}
        <p>Form error!</p>
      {/await}
    {/if}
  </div>
  <Socials />
</form>

<style lang="scss">
  @use '../scss/breakpoints.scss';
  @use '../scss/global.scss' as *;
  @use 'sass:color';

  .submit {
    @include button;
  }
  .submit-area {
    width: 100%;
    min-height: 87px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .input,
  .submit,
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
