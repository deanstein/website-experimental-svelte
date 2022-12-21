<script>
  // import libraries
  import { css } from '@emotion/css';

  // import shared styles
  import { breakpoints } from '../../shared-styles.js';
  import { sizes } from '../../shared-styles.js';

  // import sub-components
  import HeaderLogo from './HeaderLogo.svelte'
  import HeaderLogoSubtitle from './HeaderLogoSubtitle.svelte'
  import HeaderNav from './HeaderNav.svelte'
  import headerOptions from './stores/headerOptions.js'

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
  background-color: ${$headerOptions.style.container.backgroundColor};
	`
</script>

<div id='header' class='{headerClass}'>

{#if $headerOptions.data.logo.show}
  <HeaderLogo />
{/if}

{#if $headerOptions.data.logoSubtitle.show}
  <HeaderLogoSubtitle />
{/if}


{#if $headerOptions.data.nav.show}
  <HeaderNav />
{/if}

</div>

<style>
  /* styles are defined dynamically above */
</style>