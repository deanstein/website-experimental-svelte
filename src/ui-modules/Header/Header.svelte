<script>
  // import from svelte
  import { writable } from 'svelte/store'
  //import { setContext } from 'svelte';

  import { appOptions } from '../../stores/appOptions.js'

  // import libraries
  import { css } from '@emotion/css'

  // import shared styles
  import { breakpoints } from '../../shared-styles.js'
  import { sizes } from '../../shared-styles.js'

  // import sub-components
  import HeaderLogo from './HeaderLogo.svelte'
  import HeaderNav from './HeaderNav.svelte'

  // import the default options, and if provided, the overrides
  import headerOptionsDefault from './stores/headerOptionsDefault'
  export let headerOptionsOverrides = undefined
  let headerContainer

  // get header options overrides if they exist, otherwise use defaults
  const headerOptions = headerOptionsOverrides
    ? writable(headerOptionsOverrides)
    : writable($headerOptionsDefault)

  appOptions.subscribe((currentValue) => {
    headerOptionsOverrides = currentValue.headerOptions
    console.log($headerOptions.container.styleOverrides.backgroundColor)
    console.log(headerOptionsOverrides.container.styleOverrides.backgroundColor)

    headerContainer = css`
      @media (max-height: ${breakpoints.height[0]}) {
        height: ${sizes.headerMaxHeight0};
        padding-top: 5vh;
        padding-bottom: 5vh;
      }
      @media (min-height: ${breakpoints
          .height[0]}) and (max-height: ${breakpoints.height[1]}) {
        height: ${sizes.headerMaxHeight1};
        padding-top: 3vh;
        padding-bottom: 3vh;
      }
      @media (min-height: ${breakpoints.height[1]}) {
        height: ${sizes.headerMaxHeight2};
        padding-top: 2vh;
        padding-bottom: 2vh;
      }
      padding-left: ${$headerOptions.container.styleOverrides.paddingLeftRight};
      padding-right: ${$headerOptions.container.styleOverrides
        .paddingLeftRight};
      background-color: ${headerOptionsOverrides.container.styleOverrides
        .backgroundColor};
      opacity: ${$headerOptions.container.styleOverrides.backgroundOpacity};
    `
  })

  // set the options as context for all children to consume
  //setContext('headerOptions', headerOptions)
</script>

<div id="header" class="{headerContainer} header-container">
  {#if $headerOptions.logo.show}
    <!-- <HeaderLogo /> -->
  {/if}

  {#if $headerOptions.nav.show}
    <!-- <HeaderNav /> -->
  {/if}
</div>

<style>
  .header-container {
    display: flex;
    justify-content: space-between;
    position: fixed;

    width: 100%;
    width: -moz-available; /* WebKit-based browsers will ignore this. */
    width: -webkit-fill-available; /* Mozilla-based browsers will ignore this. */

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
</style>
