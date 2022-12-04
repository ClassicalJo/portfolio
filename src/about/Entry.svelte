<script lang="ts">
  export let title: string
  export let content: string
</script>

<div class="container">
  <h4 class="title">{title}</h4>
  <p class="content">{content}</p>
</div>

<style lang="scss">
  .container {
    border: 1px solid black;
  }
  .title {
    background-color: darkgrey;
    color: white;
    padding: 5px;
  }
  .content {
    padding: 5px;
  }
</style>
