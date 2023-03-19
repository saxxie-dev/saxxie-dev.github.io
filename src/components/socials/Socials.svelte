<script lang="ts">
  import SocialPill from "./SocialPill.svelte";
  import {SocialMedia} from "./Data.ts";
</script>
<section class="flex flex-wrap gap-2 justify-start">
  {#each Object.keys(SocialMedia) as media}
    <SocialPill media={media}/>
  {/each}
</section>