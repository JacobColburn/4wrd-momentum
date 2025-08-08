import { defineCollection, z } from 'astro:content';

const trucksCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().url(), // Reference images in public/
    order: z.number().optional(),
  }),
});

export const collections = {
  trucks: trucksCollection,
};