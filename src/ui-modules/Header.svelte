<script>
  import { headerClasses } from './../styles.js';
  import HeaderLogo from './HeaderLogo.svelte'
  import HeaderNav from './HeaderNav.svelte'

  export let headerData;
</script>

<div id='header' class={headerClasses.header}>
  <HeaderLogo 
    headerLogoSrc={headerData.logo.src} 
    headerLogoAlt={headerData.logo.alt}>
  </HeaderLogo>
  <HeaderNav
    headerNavData={headerData.navItems}>
  </HeaderNav>
</div>

<style>

</style>