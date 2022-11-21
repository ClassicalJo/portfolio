<script lang="ts">
  import type { ScrollTargetKey } from '../common/Scroller'
  import Slide from '../common/Slide.svelte'
  export let index: number
  export let target: ScrollTargetKey
</script>

<Slide {index} {target}>
  <div>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores, ipsum. Animi
      reprehenderit fuga, alias atque, voluptates quod, cupiditate eos neque nemo dolores
      similique temporibus unde distinctio fugit obcaecati culpa nihil?
    </p>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores, ipsum. Animi
      reprehenderit fuga, alias atque, voluptates quod, cupiditate eos neque nemo dolores
      similique temporibus unde distinctio fugit obcaecati culpa nihil?
    </p>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores, ipsum. Animi
      reprehenderit fuga, alias atque, voluptates quod, cupiditate eos neque nemo dolores
      similique temporibus unde distinctio fugit obcaecati culpa nihil?
    </p>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores, ipsum. Animi
      reprehenderit fuga, alias atque, voluptates quod, cupiditate eos neque nemo dolores
      similique temporibus unde distinctio fugit obcaecati culpa nihil?
    </p>
  </div>
</Slide>

<style>
  p {
    font-size: 20px;
    color: rgba(120, 120, 120, 1);
  }
</style>
