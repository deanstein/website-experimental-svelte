<script>
  import { headerClasses } from './../styles.js';

  export let headerNavData;
</script>

<div 
  id="header-nav-container" 
  class={headerClasses.headerNavContainer}>

    {#each headerNavData as { name }, i}

      <div class={headerClasses.headerNavItem}>{name}</div>

    {/each}
</div>

<style>
  /* styles are defined dynamically in styles.js */
</style>