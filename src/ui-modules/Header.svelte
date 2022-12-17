<script>
  // import from svelte
  import { getContext } from 'svelte'

  // import libraries
  import { css } from '@emotion/css';

  // import shared styles
  import { breakpoints } from '../shared-styles.js';
  import { colors } from '../shared-styles.js';
  import { sizes} from '../shared-styles.js';

  // import sub-components
  import HeaderLogo from './HeaderLogo.svelte'
  import HeaderNav from './HeaderNav.svelte'

  // overrides
  const headerOverrides = getContext('headerOverrides');

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
  background-color: ${headerOverrides.header.backgroundColor ?? colors.headerBackgroundColor};
	`
</script>

<div id='header' class='{headerClass}'>
  <HeaderLogo />
  <HeaderNav />
</div>

<style>
  /* styles are defined dynamically above */
</style>