<script>
  // import from svelte
  import { getContext } from 'svelte';

  // import libraries
  import { css } from '@emotion/css';

  // import shared styles
  import { breakpoints } from '../../shared-styles.js';
  import headerOptions from '../Header/headerOptions.js';

  import update from '../../stores/appOptions'

  let appOptions = getContext('appOptions')

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

  // on hover, each hero nav button should do something
  const onHoverAction = () => {

    // test method 1
    // $appOptions.appWideStyles = {
    //   ...appOptions.appWideStyles,
    //   headerFooterBaseColor: 'red'
    // }

    // $appOptions.headerOptions = {
    //   ...appOptions.headerOptions,
    //   nav: {
    //     show: false
    //   }
    // }

    // test method 2
    appOptions.update(current => ({ ...current, 
      headerOptions: {
        container: {
          ...headerOptions.container,
            styleOverrides: {
              ...headerOptions.container.styleOverrides,
              backgroundColor: 'red'
            }
        },
        nav: {
          ...headerOptions.nav,
          show: false
        }
      }
    }))

    console.log($appOptions)
  }
</script>

<div 
  id="header-nav-container" 
  class='{headerNavContainer} header-nav-container'>

    {#each $heroNavOptions.items as { name }, i}

      <div class='{headerNavItem} header-nav-item' style='background-color: {$heroNavOptions.items[i].itemBackgroundColor}' on:focus={onHoverAction} on:mouseover={onHoverAction}>{name}</div>

    {/each}
</div>

<style>
  .header-nav-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .header-nav-item {
    display: flex;
    letter-spacing: 5px;
    margin-left: 1rem;
    margin-right: 1rem;
    padding: 1rem;
    height: 50%;
    font-weight: bold;
    font-size: 1.75rem;
    align-items: 'center';
  }
</style>