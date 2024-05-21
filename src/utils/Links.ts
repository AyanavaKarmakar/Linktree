import { z } from "zod";

const LinkValidator = z.object({
  id: z.number().positive(),
  linkName: z.string().min(3),
  linkUrl: z.string().url().startsWith("https://"),
});

export type LinkType = z.infer<typeof LinkValidator>;

export const Links: LinkType[] = [
  {
    id: 1,
    linkName: "GitHub",
    linkUrl: "https://github.com/AyanavaKarmakar",
  },
  {
    id: 2,
    linkName: "LinkedIn",
    linkUrl: "https://www.linkedin.com/in/ayanava-karmakar/",
  },
  {
    id: 3,
    linkName: "LeetCode",
    linkUrl: "https://leetcode.com/u/AyanavaKarmakar/",
  },
  {
    id: 4,
    linkName: "Website",
    linkUrl: "https://ayanava-karmakar.vercel.app/",
  },
];
