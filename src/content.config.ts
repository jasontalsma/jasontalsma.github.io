import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pages = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    coverImage: z.string(),
    date: z.union([z.string(), z.date()]).optional(),
    description: z.string().optional(),
    layoutType: z.enum(['organic', 'technical']).optional(),
    images: z.array(z.string()).optional(),
    gallery1: z.array(z.string()).optional(),
    gallery2: z.array(z.string()).optional(),
    embeds: z.array(z.string()).optional(),
  }),
});

export const collections = {
  pages,
};
