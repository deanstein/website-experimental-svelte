<script>
  // import libraries
  import { css } from '@emotion/css';

  // overrides
  export let headerLogoSrc;
  export let headerLogoAlt;

  // shared styles
  let headerLogoClass = css`
	height: 100%; /* fill the header with the logo top-to-bottom */
	`
</script>

<img src={headerLogoSrc} 
  id='header-logo' 
  class={headerLogoClass} 
  alt={headerLogoAlt}>

<style>
  #header-logo {
    height: 100%; /* fill the header with the logo top-to-bottom */
  }
</style>