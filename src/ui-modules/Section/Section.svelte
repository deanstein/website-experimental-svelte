<script>
  import { css } from '@emotion/css'
  import { getContext } from 'svelte'

  import sectionOptionsDefault from './sectionOptions'

  let appOptions = getContext('appOptions')
  let sectionOptions = undefined
  let sectionContainerDynamicClass = undefined

  const initializeDynamicStyles = () => {
    // dynamic styles powered by Emotion
    sectionContainerDynamicClass = css`
      background-color: ${sectionOptions.container.styleOverrides
        .backgroundColor};
    `
  }

  // use options overrides if available, otherwise use defaults
  if (appOptions) {
    appOptions.subscribe((currentValue) => {
      const { sectionOptions: sectionOptionsFromParent } = currentValue

      sectionOptions = {
        ...sectionOptionsFromParent,
      }

      initializeDynamicStyles()
    })
  } else {
    sectionOptionsDefault.subscribe((currentValue) => {
      sectionOptions = {
        ...currentValue,
      }

      initializeDynamicStyles()
    })
  }
</script>

<div
  id="section-container"
  class="{sectionContainerDynamicClass} section-container"
/>

<style>
  .section-container {
    height: 100vh;
  }
</style>
