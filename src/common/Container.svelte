<script lang="ts"></script>

<div class="wrapper">
  <div class="hero" />
  <div class="container">
    <slot />
  </div>
</div>

<style>  
  .wrapper {
    display: flex;
    justify-content: center;
    grid-area: container;    
    overflow-y: hidden;
    max-width: 1900px;
    background-color: rgba(0,0,0,.9);
    margin: 0 40px;
  }
  .container, .hero {
    flex: 1;
    overflow-y: auto;
  }
  .container::-webkit-scrollbar {
    background-color: rgba(255, 255, 255, 0.1);
    width: 10px;
  }
</style>
