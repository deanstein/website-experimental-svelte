<script>
  // import from svelte
  import { getContext } from 'svelte';

  // get header options from parent
  const headerOptions = getContext('headerOptions')
</script>

<div class='header-logo-subtitle'>
  {$headerOptions.logoSubtitle.text}
</div>

<style>
  .header-logo-subtitle {
    margin-left: 15px;
    display: inline;
    font-weight: bold;
    letter-spacing: 5px;
  }
</style>