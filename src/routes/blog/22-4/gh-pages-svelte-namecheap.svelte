<script lang="ts">
import { LocalStore, LocalStorageKey } from '/src/store/LocalStore';
const ghUsername = new LocalStore(LocalStorageKey.ghUsername, 'saxxie-dev');

</script>
<article>
<h1>
  Setting up a website with github pages, sveltekit, and namecheap in 2022
</h1>

<aside>
  This blog post is simply intended to document the steps taken in setting up
  this site. I have a very short-term memory for this shit and will likely forget
  all the details within a week - so this has to be written down asap, for whenever
  it needs to be done again.
</aside>

Github username: <input type="text" bind:value={$ghUsername}/>

<section>
  <h2>Setting up gh-pages</h2>
  Create a git repository. If this is your "main" github site, it should match the url
  it will be hosted at (<a href="https://github.com/saxxie-dev/saxxie-dev.github.io">{$ghUsername}.github.io</a>).
  <br/>
  Next we need to enable github pages. Open your repository at 
  <a href="https://github.com/{$ghUsername}/saxxie-dev.github.io"> S</a>

  https://javascript.plainenglish.io/sveltekit-github-pages-4fe2844773de
</section>


<section>
  <h2>Generating the site with sveltekit</h2>
  https://sveltesaas.com/articles/sveltekit-github-pages-guide/
</section>




<section>
  <h2>Linking a custom domain</h2>
  https://www.namecheap.com/support/knowledgebase/article.aspx/9645/2208/how-do-i-link-my-domain-to-github-pages/

  https://www.geeksforgeeks.org/publish-websites-on-github-pages-with-a-custom-domain/

  There are 2 sides to this story, because we like security. 
  <ol>
    <li> Github needs to know that being </li>
  </ol>
</section>
</article>