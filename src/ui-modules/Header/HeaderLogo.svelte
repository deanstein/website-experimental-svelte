<script>
  // import from svelte
  import { getContext } from 'svelte'

  // import sub-components
  import HeaderLogoSubtitle from './HeaderLogoSubtitle.svelte'

  // get header options from parent
  const headerOptions = getContext('headerOptions')
</script>

<div class='logoContainer'>
  <img src={$headerOptions.logo.src} 
    id='header-logo' 
    class='header-logo'
    alt={$headerOptions.logo.alt}>

  {#if $headerOptions.logoSubtitle.show}
    <HeaderLogoSubtitle />
  {/if}
</div>

<style>
  .header-logo {
    height: 100%; /* fill the header with the logo top-to-bottom */
  }

  .logoContainer {
    height: 100%;
    display: flex;
    align-items: center;
  }
</style>