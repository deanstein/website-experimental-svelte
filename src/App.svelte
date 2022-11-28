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
    <Header {headerData}/>
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

/*** media queries ***/

/* by height */
@media (max-height: 400px) {
  :global(#header) {
    height: 20vh;
    padding: 5vh;
  }
}

@media (min-height: 400px) and (max-height: 600px) {
  :global(#header) {
    height: 10vh;
    padding: 2vh;
  }
}

@media (min-height:600px) {
  :global(#header) {
    height: 5vh;
    padding: 2vh;
  }   
}

/* by width */
@media (max-width: 600px) {
  :global(#header-nav-container) {
    display: block;
  }
}

@media (min-width: 600px) and (max-height: 1000px) {
  :global(#header-nav-container) {
    display: flex;
  }
}

@media (min-width: 1000px) {
  :global(#header-nav-container) {
    display: flex;
  }   
}
</style>
