<script>
  // import from svelte
  import { setContext } from 'svelte';

  // app options define configurations for all components
  import appOptions from './stores/appOptions'

  // make the app-wide styles accessible to all components
  setContext('appWideStyles', $appOptions.appWideStyles);

  // import sub-components
  import Header from './ui-modules/Header/Header.svelte'
  const headerOptions = $appOptions.headerOptions;

  import HeroWithNav from './ui-modules/HeroWithNav/HeroWithNav.svelte';
  const heroOptions = $appOptions.heroOptions;

</script>

<main>
  <div class='app'>
    <Header headerOptionsOverrides={$headerOptions} />
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
