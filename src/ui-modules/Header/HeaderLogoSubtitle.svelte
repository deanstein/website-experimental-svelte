<script>
  // overrides
  import headerOptions from './stores/headerOptions.js'
</script>

<div class='header-logo-subtitle'>
  {$headerOptions.data.logoSubtitle.text}
</div>

<style>
  .header-logo-subtitle {
    height: 100%;
    margin-left: 10px;
    display: inline;
    align-items: center;
    font-weight: bold;
    letter-spacing: 5px;
  }
</style>