import { defineCollection, z } from 'astro:content';

const keyboards = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    link: z.string().optional(),
    thumb: z.string(),          // path to thumbnail image
    status: z.enum(['available', 'sold-out', 'prototype']).optional(),
    order: z.number().optional(), // optional to sort on index
    price: z.string().optional(),
  }),
});

export const collections = {
  keyboards,
};