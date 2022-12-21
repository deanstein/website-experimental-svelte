<script>
  // overrides
  import headerOptions from './stores/headerOptions.js'
  import HeaderLogoSubtitle from './HeaderLogoSubtitle.svelte';
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