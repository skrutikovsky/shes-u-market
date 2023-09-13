import React, { useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';
import "swiper/css";
import 'swiper/css/pagination';
import {SwiperButtonNext, SwiperButtonPrev} from "../../shared/swiper-buttons";
export function Collage() {
    const swiper = useSwiper();
    SwiperCore.use([Autoplay]);

    useEffect(() => {
        if (swiper) {
            swiper.update();
        }
    }, [swiper]);

    return (
        <section className="img-collage">
            <Swiper
                className="img-collage-container"
                loop={true}
                autoplay={{ delay: 10000, disableOnInteraction: false, }}
            >
                <SwiperSlide key={1}>
                    <img src="/img/main-1.jpg" alt="main" />
                </SwiperSlide>
                <SwiperSlide key={2}>
                    <img src="/img/main-2.jpg" alt="main" />
                </SwiperSlide>
                <SwiperSlide key={3}>
                    <img src="/img/main-3.jpg" alt="main" />
                </SwiperSlide>
                <div className="img-collage-slider">

                    <SwiperButtonPrev/>
                    <SwiperButtonNext/>
                </div>
            </Swiper>

            <h1 className="collage-title">SEASON SALE</h1>
        </section>
    );
}
