<script lang='ts'>

  export let progress: number = 0;
  export let title: string;
  export let links: [string, string][] = [];
  export let review: string | undefined = undefined;
</script>
<style>
  section {
    display: flex
  }
</style>
<section>
  <input type='checkbox' checked={progress === 1}/>
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