<script>
  // import sub-components
  import Header from './ui-modules/Header/Header.svelte'
  import headerOptions from './ui-modules/Header/stores/headerOptions.js'

  // configure the header component with options/overrides
  headerOptions.updateOptions( 
    {
      data: {
        logo: {
          src: './src/assets/img/jdg-logo.jpg',
          alt: 'The work of Joshua Dean Goldstein'
        },
        logoSubtitle: {
          show: true,
          text: 'J. DEAN GOLDSTEIN'
        },
        nav: {
          items: [
            {name: 'HOME', page: 'home.html'}, 
            {name: 'ABOUT', page: 'about.html'}, 
            {name: 'CONTACT', page: 'contact.html'}
          ] 
        }
      },
      style: {
        container: {
            backgroundColor: '#FAFAFA',
        },
        nav: {
            itemBackgroundColor: 'none',
            itemBackgroundColorHover: 'none',
            itemTextColor: 'black',
            itemTextHoverColor: 'darkGray'
        }
      }
  });

</script>

<main>
  <div class='app'>
    <Header />
  </div>
</main>

<style>
/*** configure the root body ***/
:root {
    font-family: proxima-nova, sans-serif;
  }
  
:global(body) {
  margin: 0;
}

</style>
