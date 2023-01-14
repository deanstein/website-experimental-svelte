<script>
  import { getContext } from 'svelte';
  import { css } from '@emotion/css'

  import heroOptionsDefault from './stores/heroOptionsDefault'

  let appOptions = getContext('appOptions')
  let heroOptions = undefined
  export let heroOptionsKey

  // use options overrides if available, otherwise use defaults
  if (appOptions) {
  appOptions.subscribe((currentValue) => {

    if (currentValue.heroOptionsKey) {
      heroOptions = currentValue.heroOptionsKey
    }

    console.log(heroOptions)
  })
} else {
  heroOptionsDefault.subscribe((currentValue) => {
    heroOptions = {
      ...currentValue,
    }
  })
}

  // dynamic styles
  const heroImageDynamicClass = css`
    height: ${$heroOptions.img.styleOverrides.height};
  `
</script>

<div id="hero-container" class="hero-container">
  <img class={heroImageDynamicClass} src={heroOptions.img.src} alt="Hero" />
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
