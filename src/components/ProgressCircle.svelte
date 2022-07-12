<script lang='ts'>
  export let progress: [number, number];
  const fraction = progress[0] / progress[1];
  const displayFraction = Math.max(Math.min(fraction, 0.995), 0.005);
  const angle = 2 * Math.PI * displayFraction;
</script>
<style lang='scss'>
  svg {
    width: 100px;
    height: 100px;
    flex-shrink: 0;
  }
  circle.outer {
    fill: var(--color-background-hover);
    transition: fill 0.2s;
  }
  circle.inner {
    fill: var(--color-background);
    transition: fill 0.2s;
  }
  path {
    fill: var(--color-border);
    &:hover {
      fill: var(--color-border-hover);
    }
  }
  text {
    font: 0.35pt fira sans sans-serif;
    fill: var(--color-text);
    transition: fill 0.2s;
  }
</style>
<svg viewBox='-1 -1 2 2'>
  <circle x='0' y='0' r='1' class='outer'/>
  <path d={`M 0 -1 A 1 1 0 ${fraction > 0.5 ? 1 : 0} 1 ${Math.sin(angle)} ${-Math.cos(angle)} L 0 0`}/>
  <circle x='0' y='0' r='0.7' class='inner'/>
  <text 
    x='-0.69'
    y='0.175'
    lengthAdjust='spacingAndGlyphs'
    textLength='1.38'>{`${progress[0]}/${progress[1]}`}</text>
</svg>
