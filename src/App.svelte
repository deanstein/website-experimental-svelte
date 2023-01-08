<script>
  import { writable } from 'svelte/store'
  import { appOptions } from './stores/appOptions'

  import Header from './ui-modules/Header/Header.svelte'
  import HeroWithNav from './ui-modules/HeroWithNav/HeroWithNav.svelte'
  const heroOptions = writable($appOptions.heroOptions)
</script>

<main>
  <div class="app">
    <Header />
    <HeroWithNav heroWithNavOverrides={$heroOptions} />
  </div>
</main>

<style>
  :root {
    font-family: proxima-nova, sans-serif;
  }

  :global(body) {
    margin: 0;
  }
</style>
