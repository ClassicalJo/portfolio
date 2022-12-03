<script lang="ts">
  import Slide from '../common/Slide.svelte'
  import Card from './Card.svelte'
  import Picture from './Picture.svelte'
</script>

<Slide target="about" index={1}>
  <div class="about flex flex-1">
    <Card>
      <p class="flex-1">
        Hi! My name is Jose Barrientos, but pretty much everyone calls me Joe. I'm a
        developer from Argentina and I've been coding for about three years now
      </p>
      <Picture />
      <p class="flex-1">
        Currently living in Buenos Aires, I spent a lot of time travelling and working in
        Australia's east coast, mostly improving my english.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus eius voluptas
        repellat cupiditate illo libero? In excepturi iure, veniam atque molestias
        repellat modi natus id dignissimos doloremque veritatis sed consectetur.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus eius voluptas
        repellat cupiditate illo libero? In excepturi iure, veniam atque molestias
        repellat modi natus id dignissimos doloremque veritatis sed consectetur.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus eius voluptas
        repellat cupiditate illo libero? In excepturi iure, veniam atque molestias
        repellat modi natus id dignissimos doloremque veritatis sed consectetur.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus eius voluptas
        repellat cupiditate illo libero? In excepturi iure, veniam atque molestias
        repellat modi natus id dignissimos doloremque veritatis sed consectetur.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus eius voluptas
        repellat cupiditate illo libero? In excepturi iure, veniam atque molestias
        repellat modi natus id dignissimos doloremque veritatis sed consectetur.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus eius voluptas
        repellat cupiditate illo libero? In excepturi iure, veniam atque molestias
        repellat modi natus id dignissimos doloremque veritatis sed consectetur.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus eius voluptas
        repellat cupiditate illo libero? In excepturi iure, veniam atque molestias
        repellat modi natus id dignissimos doloremque veritatis sed consectetur.
      </p>
    </Card>
  </div>
</Slide>

<style lang="scss">
  @use '../scss/breakpoints.scss';
  .about {
    margin: 124px 44px;
  }
  @include breakpoints.lg {
    .about {
      margin: 84px 14px;
    }
  }
</style>
