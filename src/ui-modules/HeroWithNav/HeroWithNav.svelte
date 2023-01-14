<script>
  import { getContext } from 'svelte'

  import Hero from '../Hero/Hero.svelte'
  import HeroNav from './HeroNav.svelte'

  import heroWithNavOptionsDefault from './stores/heroWithNavOptionsDefault'

  let appOptions = getContext('appOptions')
  export let heroWithNavOptionsKey
  let heroWithNavOptions

  // use options overrides if available, otherwise use defaults
  if (appOptions) {
    appOptions.subscribe((currentValue) => {
      const { heroWithNavOptions: heroWithNavOptionsFromParent } = currentValue

      heroWithNavOptions = {
        ...heroWithNavOptionsFromParent,
      }
    })
  } else {
    heroWithNavOptionsDefault.subscribe((currentValue) => {
      heroWithNavOptions = {
        ...currentValue,
      }
    })
  }
</script>

<div id="hero-with-nav-container" class="hero-with-nav-container">
  <Hero heroOptionsKey={heroWithNavOptionsKey} />
  <HeroNav />
</div>

<style>
  .hero-with-nav-container {
    display: flex;
    justify-content: center;
  }
</style>
