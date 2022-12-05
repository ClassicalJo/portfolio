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
    margin: 10px 0;
  }
  .title {
    background-color: darkgrey;
    border-bottom: 1px solid black;
    color: white;
    padding: 5px;
  }
  .content {
    padding: 5px;
  }
</style>
