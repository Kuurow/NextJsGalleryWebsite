import fetchImages from "@/lib/fetchImages";
import type { ImagesResults } from '@/models/Images';
import ImgContainer from "./ImgContainer";
import addBluredDataUrls from "@/lib/getBase64";
import env from "@/lib/env"

export default async function Gallery() {
    const url = `https://api.cloudinary.com/v1_1/${env.CLOUDINARY_CLOUD_NAME}/resources/image?max_results=50`;
    const images: ImagesResults | undefined = await fetchImages(url);

    if (!images) return <h2 className="m-4 text-2xl font-bald text-white h-dvh text-center">No images found</h2>

    const photosWithBlur = await addBluredDataUrls(images);

    return (
        <section className="grid grid-cols-gallery auto-rows-[10px] z-10 h-vh tablet:h-dvh desktop:h-dvh">
            {photosWithBlur.map(image => (
                <ImgContainer key={image.asset_id} photo={image} />
            ))}
        </section>
    )
}