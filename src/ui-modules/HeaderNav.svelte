<script>
  import { css } from '@emotion/css';

  import { breakpoints } from './../styles.js';
  import { colors } from './../styles.js';

  export let headerNavData;

    // dynamic styles
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

    height: ${breakpoints.height[0]} / 2;
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
    color: ${colors.headerBackgroundColor};
    background-color: ${colors.headerNavItemBackgroundColor};
    :hover {
      background-color: ${colors.headerNavItemBackgroundColorHover};
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