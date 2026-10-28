export type SocialPlatform = "github" | "linkedin";

export type SocialLink = {
  platform: SocialPlatform;
  label: string;
  href: string;
};

export type SiteConfig = {
  name: string;
  role: string;
  tagline: string;
  description: string;
  email: string;
  socials: SocialLink[];
  skills: string[];
};

export const site: SiteConfig = {
  name: "James Benedict S. Ang",
  role: "Software Developer",
  tagline: "Engineering digital experiences from screen to foundation.",
  description: "I build to solve problems I and many others face daily. I’m all about learning and understanding software from the bottom-up.",
  email: "angjames2812@gmail.com",
  socials: [
    { platform: "github", label: "GitHub", href: "https://github.com/m4tcha17" },
    { platform: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/james-ang-/" },
  ],
  skills: ["TypeScript", "React", "Next.js", "Tailwind CSS", "C", "Javascript", ],
};
