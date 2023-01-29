<script lang="ts">
  export let description =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi minus excepturi numquam voluptates et. Eligendi dolores dolorum voluptatibus natus, impedit laudantium nostrum repudiandae deleniti odio cum eveniet cupiditate molestiae pariatur!'
</script>

<p class="description">
  {description}
</p>

<style lang="scss">
  @use '../scss/global.scss' as *;
  @use '../scss/breakpoints.scss';
  .description {
    @include text-d-l4;
    color: white;
    font-family: Nunito Sans;
    font-weight: 300;
    max-width: 600px;
    margin-bottom: 28px;
  }
  @include breakpoints.md {
    .description {
      @include text-m-l4;
    }
  }
</style>
