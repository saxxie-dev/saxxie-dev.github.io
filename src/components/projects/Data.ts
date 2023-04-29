

export enum Project {
  learnct = "LearnCT.lol",
  learntrax = "LearnTrax",
  hanzle = "Hanzle",
  saxxie = "saxxie.dev",
}

export const ProjectName: Record<Project, string> = {
  [Project.learnct]: "LearnCT.lol",
  [Project.learntrax]: "LearnTrax",
  [Project.hanzle]: "Hanzle/汉字le",
  [Project.saxxie]: "Saxxie.dev (this site)",
};

export const ProjectBlurb: Record<Project, string> = {
  [Project.learnct]: "Collection of Category Theory resources",
  [Project.learntrax]: "Self-hostable learning tracker",
  [Project.hanzle]: "Wordle-like game for single Chinese characters.",
  [Project.saxxie]: "yeah, like, the one you're looking at right now",
};


export const ProjectDetails: Record<Project, string> = {
  [Project.learnct]: "Curated selection of \"Category Theory for X\"-type books and papers, covering a surprisingly broad array of professions. tech used: svelte, tailwind",
  [Project.learntrax]: "Tool for autodidacticism - allows tracking and synchronizing progress on multiple streams of learning. Currently only self-hosted. tech used: IHP, Haskell, NixOS",
  [Project.hanzle]: "Uses ideographic description sequences (IDS) to find partial overlaps anywhere within a character's composition tree. tech used: qwik, typescript, gh-pages, unihan",
  [Project.saxxie]: "Finally got this up and running. tech used: svelte, typescript, gh-pages, tailwind",
};



export const ProjectUrls: Record<Project, string> = {
  [Project.learnct]: "https://learnct.lol",
  [Project.learntrax]: "https://github.com/saxxie-dev/LearnTrax",
  [Project.hanzle]: "https://hanzle.saxxie.dev",
  [Project.saxxie]: "https://saxxie.dev",
};

export const ProjectScreenshotUrls: Record<Project, string> = {
  [Project.learnct]: new URL('./screenshots/learnCT.PNG', import.meta.url).href,
  [Project.learntrax]: new URL('./screenshots/LearnTrax.PNG', import.meta.url).href,
  [Project.hanzle]: new URL('./screenshots/hanzle.PNG', import.meta.url).href,
  [Project.saxxie]: new URL('./screenshots/saxxie.PNG', import.meta.url).href,
};