import { defineCollection, z } from "astro:content";

// Project collection schema
const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    featured: z.boolean().default(false),
    date: z.date(),
    tags: z.array(z.string()),
    technologies: z.array(z.string()).optional(),
    github: z.string().url().optional(),
    live: z.string().url().optional(),
    client: z.string().optional(),
  }),
});

// Blog collection schema
const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    coverImage: z.string().optional(),
    tags: z.array(z.string()),
    readingTime: z.string().optional(),
    author: z.string().default("Your Name"),
  }),
});

export const collections = {
  projects: projectsCollection,
  blog: blogCollection,
};
