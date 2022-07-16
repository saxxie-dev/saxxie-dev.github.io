<script lang="ts">
import { LocalStore, LocalStorageKey } from '/src/store/LocalStore';
const ghUsername = new LocalStore(LocalStorageKey.ghUsername, 'saxxie-dev');
let projName: string = `${$ghUsername}.github.io`;
$: projUrl = `https://github.com/${$ghUsername}/${projName}`;
</script>
<style lang='scss'>
rt {
  font-size: unset;
}
</style>
<article>
<h1>
  Setting up a website with github pages, sveltekit, and namecheap in 2022
</h1>

<aside>
  This blog post is simply intended to document the steps taken in setting up
  this site and any fully static sideprojects. I have a very short-term memory for this shit and will likely forget
  all the details within a week - so this has to be written down asap, for whenever
  it needs to be done again.
</aside>

<ruby><input type="text" bind:value={$ghUsername}/><rt>Github username</rt></ruby>
<ruby><input type="text" bind:value={projName}/><rt>Project name</rt></ruby>

<section>
  <h2>Buy your domain</h2>
  <p>This is the most important step of any side project. Honestly, if you just do this step and then don't do any more work, well done!
  Search for your desired domain on <a href="https://www.namecheap.com/domains/domain-name-search/">namecheap</a> (or whoever your preferred registrar is)
  </p>
  <p>Make sure to shell out a bit extra for <code>WhoisGuard</code> just to be safe.</p>
</section>
<section>
  <h2>Configuring DNS</h2>
  DNS records are super confusing. Namecheap has documetnation <a href="https://www.namecheap.com/support/knowledgebase/article.aspx/9645/2208/how-do-i-link-my-domain-to-github-pages/">here</a> 
  about how to get this working, but there are basically 2 things we need to do. 
  <ol>
    <li>Set the <code>www.</code>
      <a href="https://en.wikipedia.org/wiki/CNAME_record">CNAME Record</a>
       to <code>{$ghUsername}.github.io</code> - this identifies github's server as the "canonical" location of this site.
    </li>
    <li>
      Add 4 <a href="">A Records</a> for host <code>@</code> with values <code>[108...111] &lt;$&gt; 185.199._.153</code>. This covers 
    </li>
  </ol>
</section>
<section>
  <h2>Setting up a repository for use with gh-pages</h2>
  <p>Create a <a href="https://github.com/new">new git repository</a>. Name it <code>{projName}</code>, then add a description and license! 
  </p>
  <p>
  Next we need to enable <code>github-pages</code>. Open <a href={`${projUrl}/settings/pages`}>the repo's page settings</a>. Enable github pages by tracking the `/docs` folder.
  </p>
  <p>Once this is done, the option to enter a custom domain will pop up. Enter your custom domain name, save, and once the DNS check is complete, make sure to check the <input type="checkbox"/><code>Enforce HTTPS</code> 
</section>
<section>
  <h2>Create and publish your site with sveltekit</h2>
  <p>Warning- contextless command flood headed your way!</p>
  <p><code>git clone {projUrl}.git</code><br/>
    <code>cd {projName}</code><br/>
    <code>npm init svelte@next</code> - Make sure to use the Skeleton rpoject - as other project contains non-static apis !<br/>
    <code>npm install @sveltejs/adapter-static@next --save-dev</code>
    <code>touch static/.nojekyll</code>
  </p>
  <p>At this point, you should be able to fully replace <code>svelte.config.js</code> with
  <a href="https://github.com/saxxie-dev/learnct.lol/blob/main/svelte.config.js">
    this implementation</a></p>
  <p>Finally, wrap up with a <code>npm install && npm run build</code> to generate your page before pushing. Wait a few minutes - if it still doesn't show up, 
    double check <a href={`${projUrl}/settings/pages`}>the page settings</a> to make sure everything there still works.</p>
</section>


</article>