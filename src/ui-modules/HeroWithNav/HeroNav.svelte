<script>
  import { css } from '@emotion/css'
  import { getContext } from 'svelte'

  import { breakpoints } from '../../shared-styles.js'

  let appOptions = getContext('appOptions')

  // dynamic styles powered by Emotion
  const headerNavContainer = css`
    @media (max-width: ${breakpoints.width[0]}) {
      display: block;
    }
    @media (min-width: ${breakpoints.width[0]}) and (max-height: ${breakpoints
        .width[1]}) {
      display: flex;
    }
    @media (min-width: ${breakpoints.width[1]}) {
      display: flex;
    }
  `
  const headerNavItem = css`
  color: ${$appOptions.heroWithNavOptions.nav.styleOverrides.itemTextColor};
  background-color: ${$appOptions.heroWithNavOptions.nav.styleOverrides.itemBackgroundColor};
  :hover {
    color: ${$appOptions.heroWithNavOptions.nav.styleOverrides.itemTextHoverColor};
    background-color: ${$appOptions.heroWithNavOptions.nav.styleOverrides.itemBackgroundColor};
`

  // on hover, each hero nav button should do something
  const updateHeaderColorViaButton = (buttonIndex) => {
    appOptions.update((currentValue) => {
      return {
        ...currentValue,
        headerOptions: {
          ...currentValue.headerOptions,
          container: {
            ...currentValue.headerOptions.container,
            styleOverrides: {
              ...currentValue.headerOptions.container.styleOverrides,
              backgroundColor:
                $appOptions.heroWithNavOptions.nav.items[buttonIndex]
                  .itemBackgroundColor,
            },
          },
        },
      }
    })
  }
</script>

<div
  id="header-nav-container"
  class="{headerNavContainer} header-nav-container"
>
  {#each $appOptions.heroWithNavOptions.nav.items as { name }, i}
    <div
      class="{headerNavItem} header-nav-item"
      style="background-color: {$appOptions.heroWithNavOptions.nav.items[i]
        .itemBackgroundColor}"
      on:focus={() => updateHeaderColorViaButton(i)}
      on:mouseover={() => updateHeaderColorViaButton(i)}
    >
      {name}
    </div>
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
