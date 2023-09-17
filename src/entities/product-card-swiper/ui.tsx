import React, {JSX} from "react";
import {AppRouter} from "../../app/const/consts";
import {Link} from "react-router-dom";

export function ProductCardSwiper(): JSX.Element{
    return (
        <Link to={AppRouter.DETAILS}>
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
        </Link>
)
}
