import fetchImages from "@/lib/fetchImages";
import type { ImagesResults } from '@/models/Images';
import ImgContainer from "./ImgContainer";
import addBluredDataUrls from "@/lib/getBase64";

export default async function Gallery() {
    const url = 'https://api.pexels.com/v1/curated';
    const images: ImagesResults | undefined = await fetchImages(url);

    if (!images) return <h2 className="m-4 text-2xl font-bald">No images found</h2>

    const photosWithBlur = await addBluredDataUrls(images);

    return (
        <section className="px-1 my-3 grid grid-cols-gallery auto-rows-[10px]">
            
                {photosWithBlur.map(image => (
                    <ImgContainer key={image.id} photo={image} />
                ))}
            
        </section>
    )
}