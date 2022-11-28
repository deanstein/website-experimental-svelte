<script>
  export let headerNavData;
</script>

<div id="header-nav-container">
	{#each headerNavData as { name }, i}
    <div id="header-nav-item">{name}</div>
	{/each}
</div>

<style>
  #header-nav-container {
    background-color: darkgrey;
    height: 100%;
    display: flex;
    float: right;
    align-items: center;
  }

  #header-nav-item {
    padding: 1rem;
    color: white;
  }
</style>