// 1. Import utilities from `astro:content`
import { defineCollection } from 'astro:content';
import { z } from 'astro:schema';
// 2. Define your collection(s)
const blogCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        tags: z.array(z.string()),
        image: z.string().optional(),
    }),

});

export const collections = {
    'blog': blogCollection,
};