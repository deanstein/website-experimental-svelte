<script>
  import HeaderLogo from './HeaderLogo.svelte'

  export let headerData;
</script>

<div id='header'>
  <HeaderLogo {...headerData}/>
</div>

<style>
  #header {
    width: 100%;
    height: 10vh;
    background-color: #FAFAFA;
  }
</style>