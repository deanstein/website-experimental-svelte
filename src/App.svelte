<script>

  import appOptions from './stores/appOptions'

  // import sub-components
  import Header from './ui-modules/Header/Header.svelte'
  const headerOptions = $appOptions.headerOptions;

  import Hero from './ui-modules/Hero/Hero.svelte'

</script>

<main>
  <div class='app'>
    <Header />
    <Hero />
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
