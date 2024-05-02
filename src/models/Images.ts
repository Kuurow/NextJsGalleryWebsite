import { z } from 'zod';

const BasicImageSchema = z.object({
    page: z.number().optional(),
    per_page: z.number().optional(),
    prev_page: z.string().optional(),
    next_page: z.string().optional(),
    total_results: z.number().optional(),
})

const PhotoSchema = z.object({
    asset_id: z.string(),
    width: z.number(),
    height: z.number(),
    url: z.string(),
    secure_url: z.string(),
    alt: z.string().optional(),
    blurredDataUrl: z.string().optional(),
})

export const ImagesSchemaWithPhotos = BasicImageSchema.extend({
    resources: z.array(PhotoSchema),
})

export type Photo = z.infer<typeof PhotoSchema>

export type ImagesResults = z.infer<typeof ImagesSchemaWithPhotos>