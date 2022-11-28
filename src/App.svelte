<script>
  import Header from './ui-modules/Header.svelte'

  const headerData = {
    logo : {
      src : '/src/assets/img/jdg-logo.png',
      alt : 'The Work of Joshua Dean Goldstein'
    },
		navItems : { 
      home : 'home.html', 
      about : 'about.html', 
      contact : 'contact.html' 
    }
	};
</script>

<main>
  <div class='app'>
    <Header {headerData}/>
  </div>
</main>

<style>
:root {
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  }
  
:global(body) {
  margin: 0;
}

/*** app-wide media queries ***/

/* adjust based on height of viewport */
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
</style>
