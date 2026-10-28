import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react/ssr";

import type { SocialPlatform } from "@/content/site";

export const socialIcons: Record<SocialPlatform, typeof GithubLogo> = {
  github: GithubLogo,
  linkedin: LinkedinLogo,
};
