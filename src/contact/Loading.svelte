<svg
  class="icon"
  width="24"
  height="24"
  viewBox="2.00 2.00 20 20"
  xmlns="http://www.w3.org/2000/svg"
>
  <g>
    <g>
      <circle r="1" cx="17" cy="12" fill="white" />
      <circle r="1" cx="7" cy="12" fill="white" />
      <circle r="1" cx="12" cy="17" fill="white" />
      <circle r="1" cx="12" cy="7" fill="white" />
    </g>
    <g transform="rotate(45,12,12)">
      <circle r="1" cx="17" cy="12" fill="white" />
      <circle r="1" cx="7" cy="12" fill="white" />
      <circle r="1" cx="12" cy="17" fill="white" />
      <circle r="1" cx="12" cy="7" fill="white" />
    </g>
    <animateTransform
      dur="4s"
      attributeName="transform"
      type="rotate"
      from="0 12 12"
      to="360 12 12"
      repeatCount="indefinite"
    />
  </g>
</svg>

<style lang="scss">
  .icon {
    animation: appearFromBelow 0.3s;
  }
</style>
