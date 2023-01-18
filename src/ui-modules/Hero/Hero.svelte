<script>
  import { fade } from 'svelte/transition'
  import { getContext } from 'svelte'
  import { css } from '@emotion/css'

  import heroOptionsDefault from './stores/heroOptionsDefault'

  let appOptions = getContext('appOptions')
  let heroOptions
  export let heroOptionsKey

  const getHeroOptions = () => {
    let options = undefined

    // use options overrides if available, otherwise use defaults
    if (appOptions) {
      appOptions.subscribe((currentValue) => {
        if (heroOptionsKey) {
          options = currentValue[heroOptionsKey]
        }
      })
    } else {
      heroOptionsDefault.subscribe((currentValue) => {
        options = {
          ...currentValue,
        }
      })
    }

    return options
  }

  heroOptions = getHeroOptions()

  // dynamic styles
  const heroImageDynamicClass = css`
    height: ${heroOptions.img.styleOverrides.height};
  `
</script>

<div id="hero-container" class="hero-container">
  {#key $appOptions[heroOptionsKey]}
    <img
      class={heroImageDynamicClass}
      src={$appOptions[heroOptionsKey].img.src}
      alt="Hero"
      transition:fade
    />
  {/key}
</div>

<style>
  .hero-container {
    width: 100%;
    width: -moz-available; /* WebKit-based browsers will ignore this. */
    width: -webkit-fill-available; /* Mozilla-based browsers will ignore this. */
  }

  img {
    width: 100%;
    object-fit: cover;
  }
</style>
