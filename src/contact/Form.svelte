<script lang="ts">
  import icons from '../assets/icons'
  import { emailStore } from '../stores/email'
  import Button from './Button.svelte'
  import FormError from './FormError.svelte'
  import FormSent from './FormSent.svelte'
  import Input from './Input.svelte'
  import Loading from './Loading.svelte'

  let form: HTMLFormElement
  const { submission, submit } = emailStore
  const handleSubmit = () => !$submission && submit(form)
</script>

<div class="wrapper flex flex-1 flex-column">
  <form bind:this={form} class="flex flex-1 form">
    <div class="flex flex-1 flex-column input-area">
      <Input
        id="form-name"
        name="name"
        title="Name"
        type="text"
        placeholder="John Smith"
        required={true}
        src={icons.person}
      />
      <Input
        id="form-company"
        name="company"
        title="Company name"
        type="text"
        placeholder="Acme Corporation"
        required={false}
        src={icons.company}
      />
      <Input
        id="form-email"
        name="email"
        title="E-mail"
        type="email"
        placeholder="email@example.com"
        required={true}
        src={icons.letter}
      />
    </div>
    <div class="flex flex-column flex-1 text-area">
      <label class="input-label" for="form-text-area">Message body (*)</label>
      <textarea
        id="form-text-area"
        class="area flex-1"
        required
        name="message"
        placeholder="Start writing here..."
      />
    </div>
  </form>
  <div class="submit-area flex center">
    <Button onClick={() => form.reset()} backgroundColor="#FF7F50" hoverColor="#FF9269">
      <img class="icon" src={icons.close} alt="" />
    </Button>
    <Button onClick={handleSubmit} backgroundColor="#32CD32" hoverColor="#47D247">
      {#if !$submission}
        <img class="icon" src={icons.send} alt="" />
      {:else}
        {#await $submission}
          <Loading />
        {:then}
          <FormSent />
        {:catch}
          <FormError />
        {/await}
      {/if}
    </Button>
  </div>
</div>

<style lang="scss">
  @use '../scss/breakpoints.scss';
  @use '../scss/global.scss' as *;
  @use 'sass:color';
  $gap: 20px;

  .form,
  .submit-area,
  .wrapper {
    gap: $gap;
  }
  .input-area {
    gap: 15px;
  }
  .input-label {
    color: white;
    padding-bottom: 5px;
  }

  .form {
    flex-direction: column;
  }
  .area {
    box-sizing: border-box;
    background: $gradientInput;
    color: black;
    border: 0px;
    padding: 10px;
    min-height: 150px;
    font-family: Noto Sans JP, sans-serif;
    border-radius: 10px;
    @include text-m-l4;
    width: 100%;
  }

  .wrapper {
    border-radius: 5px;
    max-width: 1200px;
  }
  .area::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }
  .icon {
    width: 20px;
    height: 20px;
    filter: drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.2));
    animation: appearFromBelow 0.3s;
  }
</style>
