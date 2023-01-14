<script lang="ts">
  import Slide from '../common/Slide.svelte'
  import Picture from './Picture.svelte'
</script>

<Slide target="about" index={1}>
  <div class="about relative flex flex-column">
    <h2>About me</h2>
    <p>
      Howdy! My name is José Barrientos, but everybody calls me Joe. I've been travelling
      & developing for the better part of the last 4 years, and during that time, I lived
      in Australia improving my english fluency while meeting all sorts of interesting
      people and working a lot of different jobs, which I think gave me a lot of
      perspective when working in team-oriented fast-paced environments.
    </p>
    <p>
      I'm currently working as a chapter lead in @Scalemote, providing technical
      assistance to developers working in different projects, setting standards for
      building performing, scaling and maintanable code, and interacting with clients and
      project managers to avoid obstacles, break barriers, and build a high-quality
      product.
    </p>
    <Picture />
  </div>
</Slide>

<style lang="scss">
  @use '../scss/global.scss' as *;
  @use '../scss/breakpoints.scss';
  @use './values.scss';
  .about {
    margin: 124px 44px;
    min-height: 100vh;
  }
  @include breakpoints.lg {
    .about {
      margin: 84px 14px;
    }
  }
</style>
