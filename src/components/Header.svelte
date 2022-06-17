<script lang='ts'>
  import DarkModeToggle from '../components/DarkModeToggle.svelte';
</script>
<style lang='scss'>
header {
  width: 100%;
  border-bottom: 2px solid var(--color-border);
  display: flex;
  padding: 1px 5px;
  justify-content: space-between;
  box-sizing: border-box;
  overflow: hidden;
  height: 32px;
}
a {
  color: var(--color-text);
  text-decoration: none;
  font-family: fira sans, sans-serif;
  font-size: 40px;
  line-height: 32px;
  position: relative;
}
</style>
<header>
  <a href='https://saxxie.dev'>saxxie.dev</a>
  <DarkModeToggle/>
</header>