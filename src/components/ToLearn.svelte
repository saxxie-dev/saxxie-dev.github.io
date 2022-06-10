<script lang='ts'>

  export let progress: [number, number] = [0, 1];
  export let title: string;
  export let links: [string, string][] = [];
  export let review: string | undefined = undefined;
</script>
<style lang='scss'>
  section {
    display: flex;
    border: 1px;
    font-family: fira code, sans-serif;
    input {
      width: 200px;
      border: 3px solid black;
    }
  }
</style>
<section>
  <!-- <input type='checkbox' checked={progress === 1}/> -->
  <h2>{title}</h2>
  {#each links as link}
    <a href={link[1]}>{link[0]}</a>
  {/each}
  {#if review} 
    <p>
      {review}
    </p>
  {/if}
</section>