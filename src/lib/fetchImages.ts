import type { ImagesResults } from "@/models/Images";
import { ImagesSchemaWithPhotos } from "@/models/Images";
import env from "./env";

export default async function fetchImages(url: string): 
Promise<ImagesResults | undefined> {
    try {
        const res = await fetch(url, {
            headers: {
                Authorization: 'Basic ' + btoa(env.CLOUDINARY_API_KEY + ':' + env.CLOUDINARY_API_SECRET)
            },
            next: { revalidate: 0 }
        })

        if (!res.ok) throw new Error(`Fetching images failed!\n}`);

        const imagesResults: ImagesResults = await res.json()

        // Data parsing
        const parsedData = ImagesSchemaWithPhotos.parse(imagesResults);

        if (parsedData.total_results === 0) return undefined;
    
        return parsedData;
    } catch (error) {
        if (error instanceof Error) console.log(error);
    }
}