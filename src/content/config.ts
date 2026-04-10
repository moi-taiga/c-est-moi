import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    type: z.enum(['dataset', 'tool', 'resource', 'app']).default('app'),
    description: z.string().max(200, 'Description must be 200 words or less'),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    urls: z.object({
      github: z.string().url().optional(),
      paper: z.string().url().optional(),
      website: z.string().url().optional(),
      viewer: z.string().url().optional(),
    }).optional(),
    tags: z.array(z.string()).optional(),
    status: z.enum(['active', 'maintenance', 'archived']).default('active'),
  }),
});

const publications = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    year: z.number().int().min(1900).max(2030),
    journal: z.string(),
    doi: z.string().optional(),
    url: z.string().url().optional(),
    openAccessPdf: z.string().url().optional(),
    featured: z.boolean().default(false),
    abstract: z.string().optional(),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
  }),
});

export const collections = {
  projects,
  publications,
  blog,
};
