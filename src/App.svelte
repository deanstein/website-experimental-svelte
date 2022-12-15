<script>
  import Header from './ui-modules/Header.svelte'

  const headerData = {
    logo: {
      src: '/src/assets/img/jdg-logo.png',
      alt: 'The Work of Joshua Dean Goldstein'
    },
		navItems: [ 
      {name: 'Home', page: 'home.html'}, 
      {name: 'About', page: 'about.html'}, 
      {name: 'Contact', page: 'contact.html' }
  ]
	};
</script>

<main>
  <div class='app'>
    <Header {headerData} headerColorOverride='blue'/>
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
