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
    <Header {...headerData}/>
  </div>
</main>

<style>

</style>
