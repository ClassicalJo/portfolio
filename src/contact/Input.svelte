<script lang="ts">
  interface Props {
    name: string;
    id: string;
    title: string;
    src: string;
    placeholder: string;
    type: 'email' | 'text';
    required?: boolean;
  }

  let {
    name,
    id,
    title,
    src,
    placeholder,
    type,
    required = false
  }: Props = $props();
</script>

<div class="wrapper flex flex-column">
  <label class="input-label" for={id}>{title} {required ? '(*)' : ''}:</label>
  <span class="input-area flex flex-1">
    <img class="icon" {src} alt="" />
    <input {id} class="input flex-1" {type} {required} {name} {placeholder} />
  </span>
</div>

<style lang="scss">
  @use '../scss/global.scss' as *;
  @use 'sass:color';
  .wrapper {
    max-width: 100%;
  }
  .icon {
    width: 25px;
    height: 25px;
    opacity: 0.6;
  }
  .input {
    margin: 0px 10px;
    color: rgba(0, 0, 0, 0.9);
    border: 0px;
    font-family: Noto Sans JP, sans-serif;
    @include text-m-l4;
    min-width: 0;
    width: 0;
    background-color: transparent;
  }
  .input-area {
    background: $gradientInput;
    padding: 10px;
    border-radius: 10px;
  }
  .input-label {
    color: white;
    padding-bottom: 5px;
  }
</style>
