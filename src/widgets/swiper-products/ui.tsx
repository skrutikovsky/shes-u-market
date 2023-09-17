import React, {Fragment, JSX} from "react";
import {ProductCardSwiper} from "../../entities/product-card-swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import {SwiperButtonNext, SwiperButtonPrev} from "../../shared/swiper-buttons";

type SwiperProductProps = {
    title: string
}
export function SwiperProducts({title}: SwiperProductProps): JSX.Element{

    return (
        <Fragment>
            <h1 className="swiper-title">{title}</h1>
            <Swiper className="swiper-box"
                    slidesPerView={'auto'}
                    loop={true}>
                <div className="swiper-container">
                    <SwiperSlide><ProductCardSwiper/></SwiperSlide>
                    <SwiperSlide><ProductCardSwiper/></SwiperSlide>
                    <SwiperSlide><ProductCardSwiper/></SwiperSlide>
                    <SwiperSlide><ProductCardSwiper/></SwiperSlide>
                    <SwiperSlide><ProductCardSwiper/></SwiperSlide>
                    <SwiperSlide><ProductCardSwiper/></SwiperSlide>
                    <SwiperSlide><ProductCardSwiper/></SwiperSlide>
                    <SwiperSlide><ProductCardSwiper/></SwiperSlide>
                </div>
                <div className="swiper-sliders">
                    <SwiperButtonPrev/>
                    <SwiperButtonNext/>
                </div>
            </Swiper>
        </Fragment>
    )
}
