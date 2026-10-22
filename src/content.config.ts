import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			resources: z
				.array (
					z.object({
						text: z.string(),
						url: z.url(),
					})
				)
			.optional(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			leftImages: z
				.array (
					z.object({
						alt: z.string(),
						image: image(),
					})
				).optional(),
			rightImage: z
				.object({
						alt: z.string(),
						image: image(),
					})
				.optional(),
			author: reference('authors').optional(),
			tags: z.array(z.string()).optional(),
		}),
});

const authors = defineCollection({
	// Load Markdown files in the `src/content/authors/` directory.
	loader: glob({ base: './src/content/authors', pattern: '**/*.md' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			avatar: image(),
			bio: z.string(),
			socialLinks: z
				.array(
					z.object({
						platform: z.string(),
						url: z.url(),
					})
				)
				.optional(),
		}),
});

export const collections = { blog, authors };