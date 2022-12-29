<script>
    // import from svelte
    import { writable } from 'svelte/store';
    import { setContext } from 'svelte';

    // import libraries
    import { css } from '@emotion/css';

    // import shared styles
    import { breakpoints } from '../../shared-styles.js';
    import { sizes } from '../../shared-styles.js';

    // import sub-components
    import Hero from '../Hero/Hero.svelte';
    import HeroNav from './HeroNav.svelte';

    // import the default options, and if provided, the overrides
    import heroWithNavOptionsDefault from './stores/heroWithNavOptionsDefault'
    export let heroWithNavOverrides = undefined;

    // get header options overrides if they exist, otherwise use defaults
    const heroWithNavOptions = heroWithNavOverrides ? writable(heroWithNavOverrides) : writable($heroWithNavOptionsDefault);

    setContext('heroNavOptions', writable($heroWithNavOptions.nav));
</script>

<div id='hero-nav-overall-container' class='hero-nav-overall-container'>
    <Hero heroOptionsOverrides={$heroWithNavOptions}/>
    <HeroNav />
</div>

<style>
    .hero-nav-overall-container {
        display: flex;
        justify-content: center;
    }
</style>