<script>
  // app options define options for all components
  import appOptions from './stores/appOptions'

  // import sub-components
  import Header from './ui-modules/Header/Header.svelte'
  const headerOptions = $appOptions.headerOptions;

  import Hero from './ui-modules/Hero/Hero.svelte'
  const heroOptions = $appOptions.heroOptions;

</script>

<main>
  <div class='app'>
    <Header headerOptionsOverrides={$headerOptions} />
    <Hero heroOptionsOverrides={$heroOptions} />
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
