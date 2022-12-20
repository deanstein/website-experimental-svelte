<script>
  // import sub-components
  import Header from './ui-modules/Header.svelte'
  import headerOptions from './ui-modules/header.store.js'
  
  console.log($headerOptions);

  headerOptions.updateOptions( 
    {
      logo: {
        src: './src/assets/img/jdg-logo.png',
        alt: 'The work of Joshua Dean Goldstein'
    },
    nav:{
        items: [
            {name: 'Home', page: 'home.html'}, 
            {name: 'About', page: 'about.html'}, 
            {name: 'Contact', page: 'contact.html'}
        ] 
      }
  });

  console.log($headerOptions);

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
