import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    updatedDate: z.string().optional(),
    author: z.string().default('EduTarget jamoasi'),
    category: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    readingTime: z.number(),
    faq: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),
  }),
});

export const collections = { blog };
