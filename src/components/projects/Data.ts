

export enum Project {
  hanzle = "Hanzle",
  saxxie = "saxxie.dev",
}

export const ProjectName: Record<Project, string> = {
  [Project.hanzle]: "Hanzle/汉字le",
  [Project.saxxie]: "Saxxie.dev (this site)",
};

export const ProjectBlurb: Record<Project, string> = {
  [Project.hanzle]: "Wordle-like game for single Chinese characters.",
  [Project.saxxie]: "yeah, like, the one you're looking at right now",
};


export const ProjectDetails: Record<Project, string> = {
  [Project.hanzle]: "Uses ideographic description sequences (IDS) to find partial overlaps anywhere within a character's composition tree. tech used: qwik, typescript, gh-pages, unihan",
  [Project.saxxie]: "Finally got this up and running. tech used: svelte, typescript, gh-pages, tailwind",
};



export const ProjectUrls: Record<Project, string> = {
  [Project.hanzle]: "https://hanzle.saxxie.dev",
  [Project.saxxie]: "https://saxxie.dev",
};

export const ProjectScreenshotUrls: Record<Project, string> = {
  [Project.hanzle]: new URL('./screenshots/hanzle.PNG', import.meta.url).href,
  [Project.saxxie]: new URL('./screenshots/saxxie.PNG', import.meta.url).href,
};