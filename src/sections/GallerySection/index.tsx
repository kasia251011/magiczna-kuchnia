import Image from "next/image";
import Link from "next/link";

import { IMAGES } from "@/utils/images";

const GallerySection = () => (
  <section id="galeria">
    <div className="container">
      <h2 className="text-center mt-24 mb-14">Galeria</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-24">
        <div className="grid gap-4">
          {IMAGES.slice(0, 2).map(({ img, imgThumb }, index) => (
            <Link key={index} href={img.src}>
              <Image
                className="gallery-img"
                src={imgThumb!}
                alt="Katering, zimne zakąski"
              />
            </Link>
          ))}
        </div>
        <div className="grid sm:hidden md:grid sm-hidden-images gap-4">
          {IMAGES.slice(3, 5).map(({ img, imgThumb }, index) => (
            <Link key={index} href={img.src}>
              <Image
                className="gallery-img"
                src={imgThumb!}
                alt="Katering, zimne zakąski"
              />
            </Link>
          ))}
        </div>
        <div className="grid  gap-4">
          {IMAGES.slice(6, 7).map(({ img, imgThumb }, index) => (
            <Link key={index} href={img.src}>
              <Image
                className="gallery-img"
                src={imgThumb!}
                alt="Katering, zimne zakąski"
              />
            </Link>
          ))}
          <Link className="relative" href={IMAGES[8].img.src}>
            <Image
              className="gallery-img "
              src={IMAGES[8].imgThumb!}
              alt="Zastawa - desery"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-[#0009] rounded-lg flex justify-center items-center">
              <span className="text-white text-5xl">
                + <span id="Image-count"></span>
              </span>
            </div>
          </Link>
        </div>
        <div className="hidden">
          {IMAGES.map(({ img }, index) => (
            <Link key={index} href={img.src}>
              <Image
                className="gallery-img "
                src={img}
                alt="Katering, zimne zakąski"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default GallerySection;
