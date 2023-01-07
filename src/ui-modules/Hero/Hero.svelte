<script>
  // import from svelte
  import { writable } from 'svelte/store'

  // import libraries
  import { css } from '@emotion/css'

  // import the default options, and if provided, the overrides
  import heroOptionsDefault from './stores/heroOptionsDefault'
  export let heroOptionsOverrides = undefined

  // get options overrides if they exist, otherwise use defaults
  const heroOptions = heroOptionsOverrides
    ? writable(heroOptionsOverrides)
    : writable($heroOptionsDefault)

  // dynamic styles
  const heroImage = css`
    height: ${$heroOptions.img.styleOverrides.height};
  `
</script>

<div id="hero-container" class="hero-container">
  <img class={heroImage} src={$heroOptions.img.src} alt="Hero" />
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
