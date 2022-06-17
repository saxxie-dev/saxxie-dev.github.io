<script lang='ts'>
  import { browser } from '$app/env';
  import { darkmode } from '../store/DarkmodeStore'

  $: if(browser) {
    document.body.classList.toggle('darkmode', $darkmode);
    document.body.classList.toggle('lightmode', !$darkmode);
  }
</script>
<style lang='scss'>
@import 'src/styles/themes';

:global body {
  transition: background-color 0.2s, color 0.2s;
}

@mixin slideRight {
  margin-left: 20px;
}

.switch {
  border: 2px solid var(--color-border);
  width: 40px;
  height: 20px;
  padding: 2px;
  border-radius: 5px;
  display: flex;
}
input {
  width: 0px;
  height: 0px;
  opacity: 0;
  margin: 0px;
  padding: 0px;
  border: none;
  position: fixed;
  &:checked + .slider {
    @include slideRight;
  }
  &:focus-visible + .slider {
    border-color: Highlight;
    border-color: -webkit-focus-ring-color;
    background-color: var(--color-background-hover);
  }
}
:global body.darkmode {
  & .switch input {
    @include slideRight;
  }
}

.slider {
  border: 2px solid var(--color-border);
  border-radius: 3px;
  height: 16px;
  width: 16px;
  transition: margin-left 0.5s, background-color 0.2s;
  &:hover {
    background-color: var(--color-background-hover);
    border-color: var(--color-border-hover);
  }
  &:active {
    background-color: var(--color-background-click);
    border-color: var(--color-border-click);
  }
  &:focus {
    box-shadow: 0px 0px 5px #489673;
    outline: none;
  }
}
</style>

<label class='switch'>
  <input type='checkbox' bind:checked={$darkmode}/>
  <span class='slider' title={`Toggle dark mode (${$darkmode})`}/>
</label>