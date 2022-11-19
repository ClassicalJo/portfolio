<script lang="ts"></script>

<div class="flex flex-1">
  <h1 class="flex-1 gradient-text">ClassicalJo</h1>
</div>

<style lang="scss">
  @use '../scss/mixins.scss';

  div {
    justify-content: center;
  }
  h1 {
    @include mixins.gradientText;
    font-weight: 400;
    font-size: 72px;
  }
</style>
