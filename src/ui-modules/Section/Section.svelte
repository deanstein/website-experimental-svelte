<script>
  import { getContext } from 'svelte'

  import sectionOptionsDefault from './sectionOptions'

  let appOptions = getContext('appOptions')
  let sectionOptions

  // use options overrides if available, otherwise use defaults
  if (appOptions) {
    appOptions.subscribe((currentValue) => {
      const { sectionOptions: sectionOptionsFromParent } = currentValue

      sectionOptions = {
        ...sectionOptionsFromParent,
      }
    })
  } else {
    sectionOptionsDefault.subscribe((currentValue) => {
      sectionOptions = {
        ...currentValue,
      }
    })
  }
</script>

<div id="section-container" class="section-container" />

<style>
  .section-container {
    height: 100vh;
  }
</style>
