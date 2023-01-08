<script>
  import { css } from '@emotion/css'
  import { breakpoints } from '../../shared-styles.js'

  export let headerOptionsFromParent

  // dynamic styles powered by Emotion
  const headerNavContainerClass = css`
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
    align-items: ${headerOptionsFromParent.nav.styleOverrides.alignItems};
  `
  const headerNavItemClass = css`
    align-items: ${headerOptionsFromParent.nav.styleOverrides.alignItems};
    color: ${headerOptionsFromParent.nav.styleOverrides.itemTextColor};
    background-color: ${headerOptionsFromParent.nav.styleOverrides.itemBackgroundColor};
    :hover {
      color: ${headerOptionsFromParent.nav.styleOverrides.itemTextHoverColor};
      background-color: ${headerOptionsFromParent.nav.styleOverrides
        .itemBackgroundColor};
    }
    ${headerOptionsFromParent.nav.styleOverrides.itemBackgroundColor == 'none' &&
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
  class="{headerNavContainerClass} header-nav-container"
>
  {#each headerOptionsFromParent.nav.items as { name }, i}
    <div class="{headerNavItemClass} header-nav-item">{name}</div>
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
