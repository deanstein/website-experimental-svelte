<script>
  // app options define options for all components
  import appOptions from './stores/appOptions'

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
