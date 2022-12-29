<script>
  // import from svelte
  import { getContext } from 'svelte';

  // import libraries
  import { css } from '@emotion/css';

  // import shared styles
  import { breakpoints } from '../../shared-styles.js';

  // get header options from parent
  const heroNavOptions = getContext('heroNavOptions')

  // dynamic styles powered by Emotion
  const headerNavContainer = css`
  @media (max-width: ${breakpoints.width[0]}) {
  display: block;
  }
  @media (min-width: ${breakpoints.width[0]}) and (max-height: ${breakpoints.width[1]}) {
  display: flex;
  }
  @media (min-width: ${breakpoints.width[1]}) {
    display: flex;
  }
`
  const headerNavItem = css`
  color: ${$heroNavOptions.styleOverrides.itemTextColor};
  background-color: ${$heroNavOptions.styleOverrides.itemBackgroundColor};
  :hover {
    color: ${$heroNavOptions.styleOverrides.itemTextHoverColor};
    background-color: ${$heroNavOptions.styleOverrides.itemBackgroundColor};
`
</script>

<div 
  id="header-nav-container" 
  class='{headerNavContainer} header-nav-container'>

    {#each $heroNavOptions.items as { name }, i}

      <div class='{headerNavItem } header-nav-item'>{name}</div>

    {/each}
</div>

<style>
  .header-nav-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
    align-items: 'center';
  }
  
  .header-nav-item:last-of-type {
    margin-right: 0rem;
    padding-right: 0rem;
  }
</style>