<script>
  import { headerClasses } from './../styles.js';
  export let headerLogoSrc;
  export let headerLogoAlt;
</script>

<img src={headerLogoSrc} 
  id='header-logo' 
  class={headerClasses.headerLogo} 
  alt={headerLogoAlt}>

<style>
  #header-logo {
    height: 100%; /* fill the header with the logo top-to-bottom */
  }
</style>