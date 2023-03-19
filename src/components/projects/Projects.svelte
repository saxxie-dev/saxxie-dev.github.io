<script lang="ts">
  import {Project, ProjectScreenshotUrls } from "./data.ts";
  import ProjectCard from "./ProjectCard.svelte";
</script>
<ul class="px-4 divide-y divide-slate-200 dark:divide-slate-600">
  {#each Object.values(Project) as project}
    <ProjectCard project={project}/>
  {/each}
</ul>