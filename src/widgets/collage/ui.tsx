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
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 10000, disableOnInteraction: false, }}
            >
                <SwiperSlide key={1} className="collage">
                    <img src="/img/main1.jpg" alt="main" />
                </SwiperSlide>
                <SwiperSlide key={2} className="collage">
                    <img src="/img/main2.jpg" alt="main" />
                </SwiperSlide>
                <SwiperSlide key={3} className="collage">
                    <img src="/img/main3.jpg" alt="main" />
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
