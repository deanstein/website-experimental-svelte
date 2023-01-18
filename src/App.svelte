<script>
  import { setContext } from 'svelte'
  import { appOptions } from './stores/appOptions'

  import Header from './ui-modules/Header/Header.svelte'
  import HeroWithNav from './ui-modules/HeroWithNav/HeroWithNav.svelte'
  import Section from './ui-modules/Section/Section.svelte'

  setContext('appOptions', appOptions)
</script>

<main>
  <div class="app">
    <Header />
    <HeroWithNav
      heroWithNavOptionsKey={$appOptions.optionsKeys
        .heroWithProjectTypeOptionsKey}
    />
    <Section />
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
