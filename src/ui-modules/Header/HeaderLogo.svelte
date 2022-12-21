<script>
  // overrides
  import headerOptions from './stores/headerOptions.js'
  import HeaderLogoSubtitle from './HeaderLogoSubtitle.svelte';
</script>

<div class='logoContainer'>
  <img src={$headerOptions.data.logo.src} 
  id='header-logo' 
  class='header-logo'
  alt={$headerOptions.data.logo.alt}>

  {#if $headerOptions.data.logoSubtitle.show}
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