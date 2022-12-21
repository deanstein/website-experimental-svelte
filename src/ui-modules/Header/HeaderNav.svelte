<script>
  // import libraries
  import { css } from '@emotion/css';

  // import shared styles
  import { breakpoints } from '../../shared-styles.js';

  // overrides
  import headerOptions from './stores/headerOptions.js'

  // dynamic styles powered by Emotion
  const headerNavContainerClass = css`
  @media (max-width: ${breakpoints.width[0]}) {
  display: block;
  }
  @media (min-width: ${breakpoints.width[0]}) and (max-height: ${breakpoints.width[1]}) {
  display: flex;
  }
  @media (min-width: ${breakpoints.width[1]}) {
    display: flex;
  }
  height: 100%;
  display: flex;
  float: right;
  align-items: center;
`
  const headerNavItemClass = css`
  display: flex;
  align-items: center;
  letter-spacing: 5px;
  margin-left: 1rem;
  margin-right: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 50%;
  font-weight: bold;
  color: ${$headerOptions.nav.styleOverrides.itemTextColor};
  background-color: ${$headerOptions.nav.styleOverrides.itemBackgroundColor};
  :hover {
    color: ${$headerOptions.nav.styleOverrides.itemTextHoverColor};
    background-color: ${$headerOptions.nav.styleOverrides.itemBackgroundColor};
`
</script>

<div 
  id="header-nav-container" 
  class={headerNavContainerClass}>

    {#each $headerOptions.nav.items as { name }, i}

      <div class={headerNavItemClass}>{name}</div>

    {/each}
</div>

<style>
  /* styles are defined dynamically in styles.js */
</style>