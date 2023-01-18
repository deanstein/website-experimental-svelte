<script>
  import Hero from '../Hero/Hero.svelte'
  import HeroNav from './HeroNav.svelte'

  export let heroWithNavOptionsKey
</script>

<div id="hero-with-nav-container" class="hero-with-nav-container">
  <Hero heroOptionsKey={heroWithNavOptionsKey} />
  <HeroNav heroNavOptionsKey={heroWithNavOptionsKey} />
</div>

<style>
  .hero-with-nav-container {
    display: flex;
    justify-content: center;
  }
</style>
