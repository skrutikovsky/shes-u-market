import {JSX} from "react";

export function ProductCardSwiper(): JSX.Element{
    return (
        <div className="swiper-item">
        <div className="swiper-item-photo">
        <img src="/img/product7-1.jpg" alt="card-swiper"/>
        </div>
        <div className="swiper-color-list">
    <div className="swiper-color-item"></div>
        <div className="swiper-color-item"></div>
        <div className="swiper-color-item"></div>
        </div>
        <div className="swiper-item-name">Курточка Stone-Island</div>
    </div>
)
}
