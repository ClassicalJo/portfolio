<script lang="ts">
  import Entry from './Entry.svelte'
  let data = [
    ['NAME', 'Jose Barrientos'],
    ['DATE OF BIRTH (dd/mm/yyyy', '02/08/1988'],
    ['ADDRESS', 'Buenos Aires, Argentina'],
    ['PRONOUNS', 'he/him'],
    ['E-MAIL', 'jb.barrientos@yahoo.com']
  ]
</script>

<div class="form">
  {#each data as [title, content]}
    <Entry {title} {content} />
  {/each}
</div>

<style lang="scss">
  @use './values.scss';
  @use '../scss/breakpoints.scss';
  .form {
    background-color: white;
    padding: 5px;
  }
  .form::before {
    content: '';
    width: values.$pictureWidth;
    height: values.$pictureHeight;
    float: right;
  }

  @include breakpoints.lg {
    .form::before {
      width: values.$longPictureWidth;
      height: values.$longPictureHeight;
    }
  }
</style>
