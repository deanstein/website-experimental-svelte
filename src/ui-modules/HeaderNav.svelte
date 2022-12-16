<script>
  // import libraries
  import { css } from '@emotion/css';

  // import shared styles
  import { breakpoints } from '../shared-styles.js';
  import { colors } from '../shared-styles.js';

  // overrides
  export let headerNavData = undefined;
  export let headerNavItemTextColorOverride = undefined;
  export let headerNavItemBackgroundColorOverride = undefined;
  export let headerNavItemBackgroundColorHoverOverride = undefined;

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
  margin-left: 1rem;
  margin-right: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  height: 50%;
  color: ${headerNavItemTextColorOverride ?? colors.headerBackgroundColor};
  background-color: ${headerNavItemBackgroundColorOverride ?? colors.headerNavItemBackgroundColor};
  :hover {
    background-color: ${headerNavItemBackgroundColorHoverOverride ?? colors.headerNavItemBackgroundColorHover};
`
</script>

<div 
  id="header-nav-container" 
  class={headerNavContainerClass}>

    {#each headerNavData as { name }, i}

      <div class={headerNavItemClass}>{name}</div>

    {/each}
</div>

<style>
  /* styles are defined dynamically in styles.js */
</style>