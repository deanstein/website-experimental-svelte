<script>
  import { getContext } from 'svelte';
  import { css } from '@emotion/css'
  //import { appOptions } from '../../stores/appOptions.js'
  import { breakpoints } from '../../shared-styles.js' // remove
  import { sizes } from '../../shared-styles.js'// remove
  import { headerOptionsDefault } from './stores/headerOptionsDefault'

  let appOptions = getContext('appOptions');
  let headerOptionsOverrides
  let headerOptions
  let headerContainerClass

  const initializeContainerClass = () =>
  {
    headerContainerClass = css`
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
      padding-left: ${headerOptions.container.styleOverrides.paddingLeftRight};
      padding-right: ${headerOptions.container.styleOverrides.paddingLeftRight};
      background-color: ${headerOptions.container.styleOverrides
        .backgroundColor};
      opacity: ${headerOptions.container.styleOverrides.backgroundOpacity};
    `
  }

  // define header options as overrides if available, otherwise defaults
  if (appOptions)
  {
    appOptions.subscribe((currentValue) => {
      const { headerOptions: headerOptionsOverridesFromApp } = currentValue;
      
      headerOptionsOverrides = {
        ...headerOptionsOverridesFromApp,
      }

      headerOptions = {
        ...headerOptionsOverrides,
      }

    initializeContainerClass();

    })
  }
  else {

    headerOptionsDefault.subscribe((currentValue) => {
          headerOptions = {
            ...currentValue,
          }

          initializeContainerClass();
        })

  }
</script>

<div id="header" class="{headerContainerClass} header-container">
  {#if headerOptions.logo.show}
    <!-- <HeaderLogo /> -->
  {/if}

  {#if headerOptions.nav.show}
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
