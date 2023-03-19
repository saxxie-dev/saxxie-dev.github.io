<script lang='ts'>
  import DarkModeToggle from '../components/DarkModeToggle.svelte';
</script>
<style>
header {
  width: 100%;
  display: flex;
  padding: 1px 5px;
  justify-content: space-between;
  box-sizing: border-box;
  overflow: hidden;
  height: 32px;
  flex-shrink: 0;
}
a {
  color: var(--color-text);
  font-family: fira sans, sans-serif;
  font-size: 40px;
  line-height: 32px;
  position: relative;
  letter-spacing: -0.06em;
}
</style>
<header class="border-b-2 border-slate-600 dark:border-slate-100">
  <a href='https://saxxie.dev'>saxxie.dev</a>
  <DarkModeToggle/>
</header>