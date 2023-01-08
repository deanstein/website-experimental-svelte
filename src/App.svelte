<script>
  import { setContext } from 'svelte'
  import { appOptions } from './stores/appOptions'

  import Header from './ui-modules/Header/Header.svelte'
  import HeroWithNav from './ui-modules/HeroWithNav/HeroWithNav.svelte'

  setContext('appOptions', appOptions)
  //const heroOptions = writable($appOptions.heroOptions)
</script>

<main>
  <div class="app">
    <Header />
    <HeroWithNav />
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
