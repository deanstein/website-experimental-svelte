<script>
  import { css } from '@emotion/css'
  import { getContext } from 'svelte'

  import { breakpoints } from '../../shared-styles.js'

  let appOptions = getContext('appOptions')
  export let heroNavOptionsKey

  let heroNavOptions

  const getHeroNavOptions = () => {
    let options = undefined

    // use options overrides if available, otherwise use defaults
    if (appOptions) {
      appOptions.subscribe((currentValue) => {
        if (heroNavOptionsKey) {
          options = currentValue[heroNavOptionsKey]
        }
      })
    }

    return options
  }

  heroNavOptions = getHeroNavOptions()

  // dynamic styles powered by Emotion
  const headerNavContainerDynamicClass = css`
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
  const headerNavItemDynamicClass = css`
  color: ${heroNavOptions.nav.styleOverrides.itemTextColor};
  background-color: ${heroNavOptions.nav.styleOverrides.itemBackgroundColor};
  :hover {
    color: ${heroNavOptions.nav.styleOverrides.itemTextHoverColor};
    background-color: ${heroNavOptions.nav.styleOverrides.itemBackgroundColor};
`

  // on hover, each hero nav button should do something
  const setHeaderColorToButtonColor = (buttonIndex) => {
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
                heroNavOptions.nav.items[buttonIndex].itemBackgroundColor,
            },
          },
        },
      }
    })
  }

  const setHeaderColorToDefault = () => {
    appOptions.update((currentValue) => {
      return {
        ...currentValue,
        headerOptions: {
          ...currentValue.headerOptions,
          container: {
            ...currentValue.headerOptions.container,
            styleOverrides: {
              ...currentValue.headerOptions.container.styleOverrides,
              backgroundColor: $appOptions.appWideStyles.headerFooterBaseColor,
            },
          },
        },
      }
    })
  }

  const setHeroImageToButtonData = (buttonIndex) => {
    appOptions.update((currentValue) => {
      return {
        ...currentValue,
        [heroNavOptionsKey]: {
          ...currentValue[heroNavOptionsKey],
          img: {
            ...currentValue[heroNavOptionsKey].img,
            src: heroNavOptions.nav.items[buttonIndex].itemHeroImage,
          },
        },
      }
    })
  }
</script>

<div
  id="header-nav-container"
  class="{headerNavContainerDynamicClass} header-nav-container"
>
  {#each heroNavOptions.nav.items as { name }, i}
    <div
      class="{headerNavItemDynamicClass} header-nav-item"
      style="background-color: {heroNavOptions.nav.items[i]
        .itemBackgroundColor}"
      on:focus={() => setHeaderColorToButtonColor(i)}
      on:blur={() => setHeaderColorToDefault()}
      on:mouseout={() => setHeaderColorToDefault()}
      on:mouseover={() => setHeaderColorToButtonColor(i)}
      on:focus={() => setHeroImageToButtonData(i)}
      on:mouseover={() => setHeroImageToButtonData(i)}
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
