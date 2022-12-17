<script>
  // import from svelte
  import { setContext } from 'svelte'

  // import sub-components
  import Header from './ui-modules/Header.svelte'

  // configure the header and its sub-components
  const headerConfig = {
    header: {
      headerBackgroundColor: undefined
    },
    headerLogo: {
      src: '/src/assets/img/jdg-logo.png',
      alt: 'The Work of Joshua Dean Goldstein'
    },
    headerNav: {
      navItems: [ 
      {name: 'Home', page: 'home.html'}, 
      {name: 'About', page: 'about.html'}, 
      {name: 'Contact', page: 'contact.html' }
    ],
      colors: {
        headerNavItemBackgroundColor: undefined,
        headerNavItemTextColor: undefined
      }
    }
  }

  setContext('headerOverrides', headerConfig)
</script>

<main>
  <div class='app'>
    <Header />
  </div>
</main>

<style>
/*** configure the root body ***/
:root {
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  }
  
:global(body) {
  margin: 0;
}

</style>
