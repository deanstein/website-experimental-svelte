<script>
  import { appOptions } from '../../stores/appOptions.js'
  import { css } from '@emotion/css'
  import { breakpoints } from '../../shared-styles.js'
  import { sizes } from '../../shared-styles.js'
  import { headerOptionsDefault } from './stores/headerOptionsDefault'

  export let headerOptionsOverrides = undefined
  let headerOptions
  let headerContainerClass

  appOptions.subscribe((appOptionStore) => {
    const { headerOptions: headerOptionsFromStore } = appOptionStore
    headerOptionsOverrides = {
      ...headerOptionsFromStore,
    }

    if (headerOptionsOverrides) {
      headerOptions = {
        ...headerOptionsOverrides,
      }
    } else {
      headerOptionsDefault.subscribe((currentValue) => {
        headerOptions = {
          ...currentValue,
        }
      })
    }

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
  })
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
