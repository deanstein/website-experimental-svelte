<script>
  import { headerClasses } from './../styles.js';
  import {breakpoints} from './../styles.js';
  import { colors } from './../styles.js';
  import HeaderLogo from './HeaderLogo.svelte'
  import HeaderNav from './HeaderNav.svelte'

  // overrides
  export let headerData = undefined;
  export let headerColorOverride = undefined;

  let elementContainer;
  $: elementContainer && elementContainer.style.setProperty('--container-background', headerColorOverride ?? colors.headerBackgroundColor);
</script>

<div id='header' class='{headerClasses.header} header' bind:this={elementContainer}>
  <HeaderLogo 
    headerLogoSrc={headerData.logo.src} 
    headerLogoAlt={headerData.logo.alt}>
  </HeaderLogo>
  <HeaderNav
    headerNavData={headerData.navItems}>
  </HeaderNav>
</div>

<style>
:root {
    --container-background: inherit;
}

.header {
    background-color: var(--container-background);
}
</style>