<script>
  // overrides
  import headerOptions from './header.store'
</script>

<img src={$headerOptions.logo.src} 
  id='header-logo' 
  class='header-logo'
  alt={$headerOptions.logo.alt}>

<style>
  .header-logo {
    height: 100%; /* fill the header with the logo top-to-bottom */
  }
</style>