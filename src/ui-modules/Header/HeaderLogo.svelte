<script>
  // overrides
  import headerOptions from './stores/headerOptions.js'
</script>

<img src={$headerOptions.data.logo.src} 
  id='header-logo' 
  class='header-logo'
  alt={$headerOptions.data.logo.alt}>

<style>
  .header-logo {
    height: 100%; /* fill the header with the logo top-to-bottom */
  }
</style>