<script lang='ts'>
  import { browser } from '$app/env';
  import { darkmode } from '../store/DarkmodeStore'

  console.log($darkmode);
  $: if(browser) {
    document.body.classList.toggle('darkmode', $darkmode);
    document.body.classList.toggle('lightmode', !$darkmode);
  }
</script>
<style lang='scss'>
@import 'src/styles/themes';

.switch {
  border: 1px solid var(--color-border);
  width: 40px;
  height: 18px;
  padding: 2px;
  border-radius: 5px;
  display: flex;
}
input {
  display: none;
}
.slider {
  border: 1px solid var(--color-border);
  border-radius: 3px;
  height: 16px;
  width: 16px;
  &:hover {
    background-color: var(--color-active);
  }
}
</style>

<label class='switch'>
  <input type='checkbox' title={`Toggle dark mode (${$darkmode})`} bind:checked={$darkmode}/>
  <span class='slider'/>
</label>