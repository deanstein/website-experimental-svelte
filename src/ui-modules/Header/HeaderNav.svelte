<script>
  // import from svelte
  import { getContext } from 'svelte'

  // import libraries
  import { css } from '@emotion/css'

  // import shared styles
  import { breakpoints } from '../../shared-styles.js'

  // get header options from parent
  const headerOptions = getContext('headerOptions')

  // dynamic styles powered by Emotion
  const headerNavContainer = css`
    @media (max-width: ${breakpoints.width[0]}) {
      display: block;
    }
    @media (min-width: ${breakpoints.width[0]}) and (max-height: ${breakpoints
        .width[1]}) {
      display: flex;
    }
    @media (min-width: ${breakpoints.width[1]}) {
      display: flex;
    }
    align-items: ${$headerOptions.nav.styleOverrides.alignItems};
  `
  const headerNavItem = css`
    align-items: ${$headerOptions.nav.styleOverrides.alignItems};
    color: ${$headerOptions.nav.styleOverrides.itemTextColor};
    background-color: ${$headerOptions.nav.styleOverrides.itemBackgroundColor};
    :hover {
      color: ${$headerOptions.nav.styleOverrides.itemTextHoverColor};
      background-color: ${$headerOptions.nav.styleOverrides
        .itemBackgroundColor};
    }
    ${$headerOptions.nav.styleOverrides.itemBackgroundColor == 'none' &&
    `
  :last-of-type {  
    margin-right: 0rem;
    padding-right: 0rem;
  }
  `}
  `
</script>

<div
  id="header-nav-container"
  class="{headerNavContainer} header-nav-container"
>
  {#each $headerOptions.nav.items as { name }, i}
    <div class="{headerNavItem} header-nav-item">{name}</div>
  {/each}
</div>

<style>
  .header-nav-container {
    height: 100%;
    display: flex;
    float: right;
  }

  .header-nav-item {
    display: flex;
    letter-spacing: 5px;
    margin-left: 1rem;
    margin-right: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    height: 50%;
    font-weight: bold;
  }
</style>
