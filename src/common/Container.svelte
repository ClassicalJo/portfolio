<script lang="ts"></script>

<div class="container flex">
  <div class="content">
    <slot />
  </div>
</div>

<style>
  .flex {
    display: flex;
  }
  .container {
    grid-area: container;
    justify-content: center;
    margin: 0 40px;
  }
  .content {
    max-width: 1900px;
    background-color: rgba(0, 0, 0, 0.9);
    overflow-y: auto;
  }
  .content::-webkit-scrollbar {
    background-color: rgba(255, 255, 255, 0.1);
    width: 10px;
  }
</style>
