<script>
  // import from svelte
  import { getContext } from 'svelte';

  // import libraries
  import { css } from '@emotion/css';

  // import shared styles
  import { breakpoints } from '../../shared-styles.js';
  import { sizes } from '../../shared-styles.js';

  // import sub-components
  import HeaderLogo from './HeaderLogo.svelte'
  import HeaderNav from './HeaderNav.svelte'

  // get header options from parent
  const headerOptions = getContext('headerOptions')

  // dynamic styles
  const headerClass = css`
	@media (max-height: ${breakpoints.height[0]}) {
		height: ${sizes.headerMaxHeight0};
		padding: 5vh;
		}
	@media (min-height: ${breakpoints.height[0]}) and (max-height: ${breakpoints.height[1]}) {
		height: ${sizes.headerMaxHeight1};
		padding: 2vh;
		}
	@media (min-height: ${breakpoints.height[1]}) {
		height: ${sizes.headerMaxHeight2};
		padding: 2vh;
		}
  display: flex;
  justify-content: space-between;
  background-color: ${$headerOptions.container.styleOverrides.backgroundColor};
	`
</script>

<div id='header' class='{headerClass}'>

{#if $headerOptions.logo.show}
  <HeaderLogo />
{/if}

{#if $headerOptions.nav.show}
  <HeaderNav />
{/if}

</div>

<style>
  /* styles are defined dynamically above */
</style>