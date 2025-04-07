'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from 'next/image';
import { Swiper as SwiperClass } from 'swiper';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';


interface ImagenGaleria {
    src: string;
    alt: string;
}

interface GaleriaImagenesProps {
    imagenes: ImagenGaleria[];
    slidesPerView?: number;
}

export const GaleriaImagenes = ({ imagenes, slidesPerView }: GaleriaImagenesProps) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

    return (
        <div className="border-2 border-slate-200 ">
            <Swiper
                loop={true}
                speed={2000}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false
                }}
                spaceBetween={1}
                centeredSlides={true}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[Autoplay, FreeMode, Navigation, Thumbs]}
                className="mySwiper2 h-[20%] box-border py-2.5 px-0 m-auto items-center justify-center flex"
            >
                {imagenes.map((imagen, index) => (
                    <SwiperSlide key={index} className="m-auto w-full mb-5 items-center flex">
                        <Image
                            src={imagen.src}
                            alt={imagen.alt}
                            width={500}
                            height={500}
                            className="m-auto h-[200px] md:h-[500px] w-auto"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={50}
                slidesPerView={slidesPerView || 3}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >


                {imagenes.map((imagen, index) => (
                    <SwiperSlide key={index} >
                        <Image
                            src={imagen.src}
                            alt={imagen.alt}
                            width={200}
                            height={200}
                            className=' h-[100px] md:h-[200px] md:w-[200px]'
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div >
    );
};
