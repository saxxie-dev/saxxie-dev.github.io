<script lang="ts">
  import {Usernames, SocialColors, Links, SubCounts} from "./Data.ts";
  export let media: SocialMedia;
</script>
<a
  class="flex divide-x rounded-full shadow-md text-sm text-slate-50 p-1 divide-slate-50/20 hover:brightness-110"
  target="_blank"
  href={Links[media]}
  style="background-color: {SocialColors[media]}"
  title={"@"+Usernames[media]}>
  <div class="px-2">
    {media}
  </div>
  
  {#if SubCounts[media]}
    <div class="px-2 text-slate-50/50">{SubCounts[media]}</div>
  {/if}
</a>