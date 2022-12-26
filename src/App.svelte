<script>
  // import from svelte
  import { setContext } from 'svelte';

  // import sub-components
  import Header from './ui-modules/Header/Header.svelte'
  import headerOptions from './ui-modules/Header/stores/headerOptionsJDG'

  import Hero from './ui-modules/Hero/Hero.svelte'

  setContext('headerOptions', headerOptions);
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
