<script>
  // import from svelte
  import { getContext } from 'svelte'

  // import libraries
  import { css } from '@emotion/css';

  // get header options from parent
  const headerOptions = getContext('headerOptions')

  // dynamic styles powered by Emotion
  const headerLogoContainer = css`
    align-items: ${$headerOptions.logo.styleOverrides.alignItems};
`
</script>

<div class='{headerLogoContainer} header-logo-container'>
  <img src={$headerOptions.logo.src} 
    id='headerLogo' 
    class='header-logo'
    alt={$headerOptions.logo.alt}>

  {#if $headerOptions.logo.subtitle.show}
    <div class='header-logo-subtitle'>
      {$headerOptions.logo.subtitle.text}
    </div>
  {/if}
</div>

<style>
  .header-logo-container {
    height: 100%;
    display: flex;
  }

  .header-logo {
    height: 100%; /* fill the header with the logo top-to-bottom */
  }

  .header-logo-subtitle {
    margin-left: 15px;
    display: inline;
    font-weight: bold;
    letter-spacing: 5px;
  }
</style>