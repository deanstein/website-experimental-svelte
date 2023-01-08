<script>
  import { appOptions } from './stores/appOptions'
  import Header from './ui-modules/Header/Header.svelte'
  // import HeroWithNav from './ui-modules/HeroWithNav/HeroWithNav.svelte'

  function handleClick() {
    const colors = ['red', 'blue', 'green']
    const color = colors[Math.floor(Math.random() * colors.length)]

    appOptions.update((currentValue) => {
      return {
        ...currentValue,
        headerOptions: {
          ...currentValue.headerOptions,
          container: {
            ...currentValue.headerOptions.container,
            styleOverrides: {
              ...currentValue.headerOptions.container.styleOverrides,
              backgroundColor: color,
            },
          },
        },
      }
    })
  }
</script>

<main>
  <div class="app">
    <Header />
    <!-- <HeroWithNav /> -->
    <button class="button" on:click={handleClick}>Update Color Nav</button>
  </div>
</main>

<style>
  :root {
    font-family: proxima-nova, sans-serif;
  }

  :global(body) {
    margin: 0;
  }

  .button {
    margin-top: 150px;
  }
</style>
