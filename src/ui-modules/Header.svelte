<script>
  // import libraries
  import { css } from '@emotion/css';

  // import shared styles
  import { breakpoints } from './../styles.js';
  import { colors } from './../styles.js';
  import { sizes} from './../styles.js';

  // import sub-components
  import HeaderLogo from './HeaderLogo.svelte'
  import HeaderNav from './HeaderNav.svelte'

  // overrides
  export let headerData = undefined;
  export let headerColorOverride = undefined;

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
  background-color: ${headerColorOverride ?? colors.headerBackgroundColor};
	`
</script>

<div id='header' class='{headerClass}'>
  <HeaderLogo 
    headerLogoSrc={headerData.logo.src} 
    headerLogoAlt={headerData.logo.alt}>
  </HeaderLogo>
  <HeaderNav
    headerNavData={headerData.navItems}>
  </HeaderNav>
</div>

<style>
  /* styles are defined dynamically above */
</style>