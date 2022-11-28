<script>
  import HeaderLogo from './HeaderLogo.svelte'

  export let headerData;
</script>

<div id='header'>
  <HeaderLogo 
    headerLogoSrc={headerData.logo.src} 
    headerLogoAlt={headerData.logo.alt}>
  </HeaderLogo>
</div>

<style>
  #header {
    width: 100%;
    background-color: #FAFAFA;
  }
</style>