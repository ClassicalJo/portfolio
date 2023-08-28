<script lang="ts">
  import Slide from '../common/Slide.svelte'
  import Lobo from '../footer/Lobo.svelte'
  import Picture from './Picture.svelte'
</script>

<Slide target="about" index={1}>
  <div class="about relative flex center">
    <div class="card">
      <div class="flex">
        <h2 class="title flex-1">About me</h2>
        <div class="lobo">
          <Lobo width={50} height={50} />
        </div>
      </div>
      <hr />
      <p class="text-body">
        Howdy! I'm <strong>José Barrientos</strong> and I've been developing for the better
        part of the last 4 years. I lived in Australia for three years improving my english,
        and during my time down-under I also had the opportunity to meet all sorts of interesting
        people, while also working in a lot of different jobs, which I think gives me a lot
        of perspective when working in team-oriented, fast-paced environments.
      </p>
      <p class="text-body">
        I recently moved back to Argentina and now I'm working as a chapter lead at
        <a class="link" href="https://www.scalemote.co/">Scalemote</a>, providing
        technical assistance to developers working in different projects, setting
        standards for building performing, scaling and maintanable code, and interacting
        with clients and project managers to avoid obstacles, break barriers, and deliver
        high-quality products and services.
      </p>
    </div>
    <Picture />
  </div>
</Slide>

<style lang="scss">
  @use '../scss/global.scss' as *;
  @use '../scss/breakpoints.scss';
  @use './values.scss';
  .about {
    padding: 124px 44px;
    font-family: Nunito Sans;
  }
  .card {
    background: $gradientInput;
    border-radius: 10px;
    max-width: 650px;
    box-shadow: 1px 1px 1px $black;
    padding: 24px;
    color: rgba(50, 50, 50, 1);
  }
  .lobo {
    align-items: end;
    justify-content: start;
    filter: invert(1);
    opacity: 0.2;
  }

  .text-body {
    font-family: Nunito Sans;
    @include text-d-l4;
    font-weight: 300;
  }
  .title,
  .text-body {
    padding: 14px 0;
  }

  .link {
    text-decoration: underline;
    color: $blue;
  }
  .link:visited {
    color: $red;
  }
  @include breakpoints.lg {
    .about {
      padding: 84px 14px;
      flex-direction: column;
    }
    .text-body {
      @include text-m-l4;
    }
  }
</style>
