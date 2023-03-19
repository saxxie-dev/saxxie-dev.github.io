<script lang="ts">
  import Socials from "../components/socials/Socials.svelte";
  import Projects from "../components/projects/Projects.svelte";
</script>

<div class="mt-4 flex flex-col md:flex-row md:justify-around grow md:gap-4 md:p-4 md:items-start" >
  <section class="border-slate-200 dark:border-slate-700 border-b md:border md:rounded-lg overflow-hidden grow-0">
    <div class="max-w-md m-auto">
      <h1 class="p-4 dark:md:bg-slate-700 md:bg-slate-200">About</h1>
      <div class="p-4">
        <p>
          👋 Hi! I'm saxxie - software engineer and occasional nanoinfluencer.
        </p>
        <p class="pt-4">
          I'm mainly interested in Algebra, Category Theory, and languages (both spoken-language and programming-languages)
        </p>
        <p class="pt-4">
          Follow along at
        </p>
      </div>
      <div class="p-2 dark:md:bg-slate-700 md:bg-slate-200">
        <Socials/>
      </div>
    </div>
  </section>
  <section class="border-slate-200 dark:border-slate-700 md:border md:rounded-lg overflow-hidden grow-0">
    <div class="max-w-xl m-auto">
      <div class="p-4 dark:md:bg-slate-700 md:bg-slate-200"><h1 class="mb-2">Projects</h1>
        <aside class="text-sm dark:text-slate-300 text-slate-500">Cool things I've made, mostly solo.</aside>
      </div>
      <Projects/>
    </div>
      
  </section>
</div>
