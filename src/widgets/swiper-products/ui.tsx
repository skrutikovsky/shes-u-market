import React, {JSX} from "react";
import {ProductCardSwiper} from "../../entities/product-card-swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import {SwiperButtonNext, SwiperButtonPrev} from "../../shared/swiper-buttons";

type SwiperProductProps = {
    title: string
}
export function SwiperProducts({title}: SwiperProductProps): JSX.Element{
    return (<>
        <h1 className="swiper-title">{title}</h1>
    <section className="swiper">
        <Swiper className="swiper-container"
                slidesPerView={4}
                loop={true}>
            <SwiperSlide><ProductCardSwiper/></SwiperSlide>
            <SwiperSlide><ProductCardSwiper/></SwiperSlide>
            <SwiperSlide><ProductCardSwiper/></SwiperSlide>
            <SwiperSlide><ProductCardSwiper/></SwiperSlide>
            <SwiperSlide><ProductCardSwiper/></SwiperSlide>
            <SwiperSlide><ProductCardSwiper/></SwiperSlide>
            <SwiperSlide><ProductCardSwiper/></SwiperSlide>
            <SwiperSlide><ProductCardSwiper/></SwiperSlide>
            <div className="swiper-sliders">
                <SwiperButtonPrev/>
                <SwiperButtonNext/>
            </div>
        </Swiper>
    </section>
        </>
    )
}
