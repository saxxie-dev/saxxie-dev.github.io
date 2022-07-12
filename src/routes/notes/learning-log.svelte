<script lang='ts'>
  import ToLearn from '../../components/ToLearn.svelte';
  import Header from '../../components/Header.svelte';
</script>
<style>
  article {
    max-width: 800px;
    width: 100%;
  }
  main {
    margin: 1em;
    display: flex;
    justify-content: space-around;
  }
  aside {
    margin: 1em;
    font-family: fira sans, sans-serif;
    color: var(--color-text-light);
  }
</style>
<Header/>
<main>
<article>
  <aside>
    Things I've read/watched, want to read/watch, etc. I'll be including things only
    if they're involved enough to be worth tracking my progress on.
  </aside>
  <ToLearn
    title='Visual Group Theory'
    links={[[
      'PDF',
      'https://raw.githubusercontent.com/liwei766/visual-group-theory/master/visual%20group%20theory.pdf']]}
    progress={[7,10]}/>
  <ToLearn 
    title='HoTTEST Summer school'
    links={[[
      'Lectures',
      'https://www.youtube.com/playlist?list=PLtIZ5qxwSNnzpNqfXzJjlHI9yCAzRzKtx'
    ],[
      'Course site',
      'https://uwo.ca/math/faculty/kapulkin/seminars/hottest_summer_school_2022.html'
    ]]}
    progress={[3,7]}
    />
  <ToLearn
    title='Avigad - Logic and Proof'
    links={[[
      'PDF',
      'https://leanprover.github.io/logic_and_proof/logic_and_proof.pdf',
    ]]}
    progress={[0,24]}
    />
  <ToLearn 
    title="Out of the East - Spices and the Medieval Imagination"
    links={[[
      'PDF',
      'https://literacias.net/bibliodigital/download/368/Out%20of%20the%20East%20Spices%20and%20the%20-%20Paul%20Freedman.pdf'
    ]]}
    progress={[56, 301]}
    review='Easy read about just how chaotic the history of the spice trade was, was reminded about this book from a tiktok'
    />
  <ToLearn 
    title="Learn Rust With Entirely Too Many Linked Lists"
    links={[
      ['Ebook', 
      'https://rust-unofficial.github.io/too-many-lists/index.html'],
    ]}
    progress={[8,8]}
    review="The funniest premise for an intro-to-X-language book I've seen. The content is great too; great practice of 'who owns what' within persistent data structures"
  />
  <ToLearn 
    title="Jacobs + Rutten introductions to (co)algebra and (co)induction"
    links={[
      ['Tutorial', 
      'http://www.cs.ru.nl/B.Jacobs/PAPERS/JR.pdf'],
      ['Introduction', 
      'https://homepages.cwi.nl/~janr/papers/files-of-papers/2011_Jacobs_Rutten_new.pdf']
    ]}
    progress={[1,2]}
    review="Bart Jacobs is THE coalgebra person, he also has a book I've thought about reading.
      The tutorial is where the whole algebra == inductive type thing finally clicked."
  />
  <ToLearn
    title="Bob Harper's HoTT Course"
    links={[
      ['Lectures',
      'https://www.youtube.com/playlist?list=PL1-2D_rCQBarjdqnM21sOsx09CtFSVO6Z'],
      ['Course Site',
      'http://www.cs.cmu.edu/~rwh/courses/hott/']
    ]}
    progress={[7,23]}
    review='Most *complete* HoTT video lectures currently published, as far as I can tell. That should be changing very soon, however.'
  />
  <ToLearn
    title='Effect typing in Koka'
    links={[[
      'Documentation',
      'https://koka-lang.github.io/koka/doc/book.html#sec-effect-types',
    ]]}
    progress={[1,1]}
    review='Probably the best-documented actual implementation of algebraic effects.'
    />
</article>
</main>
