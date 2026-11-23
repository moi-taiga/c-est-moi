import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    type: z.enum(['dataset', 'tool', 'resource', 'app']).default('app'),
    description: z.string().max(200, 'Description must be 200 words or less'),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    urls: z.object({
      github: z.url().optional(),
      paper: z.url().optional(),
      website: z.url().optional(),
      viewer: z.url().optional(),
    }).optional(),
    tags: z.array(z.string()).optional(),
    status: z.enum(['active', 'maintenance', 'archived']).default('active'),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
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
  blog,
};
