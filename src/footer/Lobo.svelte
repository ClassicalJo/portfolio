<script lang="ts">
  interface Props {
    height: number;
    width: number;
  }

  let { height, width }: Props = $props();
</script>

<svg
  class="lobo"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 500 500"
  {height}
  {width}
>
  <title>My logo, a white wolf outline</title>
  <path
    fill="rgba(255,255,255,1)"
    d="
      M 50.00,50.00 
      C 50.00,50.00 50.00,400.00 50.00,400.00
      50.00,450.00 100.00,450.00 100.00,450.00
      100.00,450.00 350.00,450.00 400.00,450.00
      450.00,450.00 450.00,400.00 450.00,400.00
      450.00,400.00 450.00,50.00 450.00,50.00
      450.00,50.00 350.00,200.00 350.00,200.00
      350.00,200.00 150.00,200.00 150.00,200.00
      150.00,200.00 50.00,50.00 50.00,50.00 
      Z"
  />
</svg>
