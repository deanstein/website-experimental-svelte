<script>
  export let headerData;
</script>

<div id='header-logo'>
  <img src={headerData.logo.src} alt={headerData.logo.alt}>
</div>

<style>
  #header-logo {
    max-height: 5%;
  }
</style>