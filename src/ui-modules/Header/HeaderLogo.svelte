<script>
  import { css } from '@emotion/css'

  export let headerOptionsFromParent

  // dynamic styles powered by Emotion
  const headerLogoContainerClass = css`
    align-items: ${headerOptionsFromParent.logo.styleOverrides.alignItems};
  `

</script>

<div class="{headerLogoContainerClass} header-logo-container">
  <img
    src={headerOptionsFromParent.logo.src}
    id="headerLogo"
    class="header-logo"
    alt={headerOptionsFromParent.logo.alt}
  />

  {#if headerOptionsFromParent.logo.subtitle.show}
    <div class="header-logo-subtitle">
      {headerOptionsFromParent.logo.subtitle.text}
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
