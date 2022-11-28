<script>
  export let headerLogoSrc;
  export let headerLogoAlt;
</script>

<img src={headerLogoSrc} alt={headerLogoAlt} id='header-logo'>

<style>
  #header-logo {
    height: 100%; /* fill the header with the logo top-to-bottom */
  }
</style>