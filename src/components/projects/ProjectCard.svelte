<script lange="ts">
  import {Project, ProjectName, ProjectScreenshotUrls, ProjectBlurb, ProjectUrls, ProjectDetails} from './Data.ts';
  export let project;
</script>

<li class="overflow-hidden py-4">
  <a href={ProjectUrls[project]}><div class="border border-slate-200 dark:border-slate-600 rounded-lg bg-contain h-20 w-20 inline-block float-left mr-2" 
  style="background-image: url('{ProjectScreenshotUrls[project]}')"/></a>
  <h2>
    <a class="hover:underline" href={ProjectUrls[project]}>{ProjectName[project]}</a>
  </h2>
  <p class="text-sm text-slate-500 dark:text-slate-400">{ProjectBlurb[project]}</p>
  <p class="text-sm">{ProjectDetails[project]}</p>
</li>