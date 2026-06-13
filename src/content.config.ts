import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "zod";

const projectHubCitySlugs = ["tehran", "karaj", "lavasan"] as const;

const neighborhoods = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/neighborhoods" }),
  schema: z
    .object({
      title: z.string().min(1),
      description: z.string().min(1),
      slug: z.string().min(1),
      city: z.enum(projectHubCitySlugs),
      neighborhood: z.string().min(1),
      focus: z.string().min(1),
      audience: z.string().min(1),
      language: z.literal("fa"),
      draft: z.boolean(),
    })
    .strict(),
});

export const collections = {
  neighborhoods,
};
