import {useSwiper} from "swiper/react";
import React from "react";

export const SwiperButtonNext = () => {
    const swiper = useSwiper();
    return <button onClick={() => swiper.slideNext()} className="img-collage-sliders-item button-slider prev">{'>'}</button>;
};
export const SwiperButtonPrev = () => {
    const swiper = useSwiper();
    return <button onClick={() => swiper.slidePrev()} className="img-collage-sliders-item button-slider prev">{'<'}</button>;
};
