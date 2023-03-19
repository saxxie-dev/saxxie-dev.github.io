<script lang='ts'>

  export let progress: [number, number] = [0, 1];
  export let title: string;
  export let links: [string, string][] = [];
  export let review: string | undefined = undefined;

  import ProgressCircle from './ProgressCircle.svelte';
</script>
<style>
  section {
    display: flex;
    border: 2px solid var(--color-border-click);
    border-radius: 8px;
    padding: 5px;
    font-family: fira sans, sans-serif;
    margin-bottom: 1em;
  }
  h2 {
    margin: 0px;
  }
  div {
    margin: 5px 10px;
  }
  p {
    margin-bottom: 3px;
  }
</style>
<section>
  <ProgressCircle progress={progress}/>
  <div>
    <h2>{title}</h2>
    {#each links as link}
      <a href={link[1]}>{link[0]}</a>&nbsp;
    {/each}
    {#if review} 
      <p>
        {review}
      </p>
    {/if}
  </div>
</section>