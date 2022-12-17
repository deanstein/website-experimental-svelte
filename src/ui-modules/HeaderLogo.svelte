<script>
  // import from svelte
  import { getContext } from 'svelte'

  // overrides
  const headerOverrides = getContext('headerOverrides');
</script>

<img src={headerOverrides.headerLogo.src} 
  id='header-logo' 
  class='header-logo'
  alt={headerOverrides.headerLogo.alt}>

<style>
  .header-logo {
    height: 100%; /* fill the header with the logo top-to-bottom */
  }
</style>