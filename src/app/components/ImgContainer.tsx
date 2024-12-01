import type { Photo } from "@/models/Images";
import Image from "next/image";
import Link from "next/link";

type Props = {
    photo: Photo
}

export default function ImgContainer({ photo }: Props) {

    const widthHeightRatio = photo.height / photo.width
    const galleryHeight = Math.ceil(340 * widthHeightRatio)
    const photoSpans = Math.ceil(galleryHeight / 10) + 1

    return (
        <div className="w-[340px] justify-self-center" style={{ gridRow: `span ${photoSpans}`}}>
            <Link href='#' className="grid-place-content-center">
                <div className="overflow-hidden group">
                    <Image 
                        src={photo.secure_url}
                        alt=''
                        width={photo.width}
                        height={galleryHeight}
                        className="group-hover:scale-110 duration-1000"
                        placeholder="blur"
                        blurDataURL={photo.secure_url}
                        sizes="300px"
                    />
                </div>
            </Link>
        </div>
    )
}