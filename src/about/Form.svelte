<script lang="ts">
  import Entry from './Entry.svelte'
  let data = [
    ['NAME', 'Jose Barrientos'],
    ['DATE OF BIRTH (dd/mm/yyyy)', '02/08/1988'],
    ['ADDRESS', 'Buenos Aires, Argentina'],
    ['PRONOUNS', 'he/him'],
    ['LANGUAGES', 'Spanish (native), English (C2 - IELTS 8.0), French (Basic)'],
    [
      'STACK',
      'HTML, CSS, Javascript, Typescript, React, Svelte, Sass, Styled-Components, Node, Express, Next, Svelte-kit'
    ],
    ['E-MAIL', 'jb.barrientos@yahoo.com'],
    ['OTHER EDUCATION', "Bachelor's degree in Criminal Law"],
    [
      'WRITE SOMETHING ABOUT YOURSELF',
      "I really enjoy a lot developing accessible and pixel-perfect user experiences. Lately I've been focusing on taking advantage of WebGL"
    ]
  ]
</script>

<div class="form">
  <div class="wrapper">
    {#each data as [title, content]}
      <Entry {title} {content} />
    {/each}
  </div>
</div>

<style lang="scss">
  @use './values.scss';
  @use '../scss/breakpoints.scss';
  .form::before {
    content: '';
    width: values.$pictureWidth;
    height: values.$pictureHeight;
    float: right;
  }
  .wrapper {
    background-color: white;
    max-width: 790px;
    padding: 25px;
  }
  @include breakpoints.lg {
    .form::before {
      width: values.$longPictureWidth;
      height: values.$longPictureHeight;
    }
  }
</style>
