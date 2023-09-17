import {JSX} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Autoplay} from "swiper";

export function ScrollingImg(): JSX.Element {
    SwiperCore.use([Autoplay]);
    return (
        <>
            <h1 className="scrolling-img-title">YOU ARE</h1>
            <section className="scrolling-img">
                <Swiper
                    slidesPerView={'auto'}
                    autoplay={{ delay: 1000, disableOnInteraction: false }} // Задержка между переключением слайдов (в миллисекундах)
                    loop={true}
                    speed={1000}
                    effect={"fade"}
                >
                    <SwiperSlide><img src="/img/product1.jpg" alt="scrolling img"/></SwiperSlide>
                    <SwiperSlide><img src="/img/product2.jpg" alt="scrolling img"/></SwiperSlide>
                    <SwiperSlide><img src="/img/product3.jpg" alt="scrolling img"/></SwiperSlide>
                    <SwiperSlide><img src="/img/product4.jpg" alt="scrolling img"/></SwiperSlide>
                    <SwiperSlide><img src="/img/product5.jpg" alt="scrolling img"/></SwiperSlide>
                    <SwiperSlide><img src="/img/product6.jpg" alt="scrolling img"/></SwiperSlide>
                    <SwiperSlide><img src="/img/product7.jpg" alt="scrolling img"/></SwiperSlide>
                    <SwiperSlide><img src="/img/product8.jpg" alt="scrolling img"/></SwiperSlide>
                </Swiper>
            </section>
        </>
    )
}
