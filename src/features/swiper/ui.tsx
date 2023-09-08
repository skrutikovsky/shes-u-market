import {JSX} from "react";

export function Swiper(): JSX.Element{
    return (<>
        <h1 className="swiper-title">MUST HAVE</h1>
    <section className="swiper">
        <div className="swiper-container">
            <div className="swiper-item">
                <div className="swiper-item-photo">
                    <img src="/img/product7-1.jpg" alt="photo"/>
                </div>
                <div className="swiper-color-list">
                    <div className="swiper-color-item"></div>
                    <div className="swiper-color-item"></div>
                    <div className="swiper-color-item"></div>
                </div>
                <div className="swiper-item-name">Курточка Stone-Island</div>
            </div>
            <div className="swiper-item">
                <div className="swiper-item-photo">
                    <img src="/img/product2.jpg" alt="photo"/>
                </div>
                <div className="swiper-color-list">
                    <div className="swiper-color-item"></div>
                    <div className="swiper-color-item"></div>
                    <div className="swiper-color-item"></div>
                    <div className="swiper-color-item"></div>
                    <div className="swiper-color-item"></div>
                </div>
                <div className="swiper-item-name">Курточка Stone-Island</div>
            </div>
            <div className="swiper-item">
                <div className="swiper-item-photo">
                    <img src="/img/product4.jpg" alt="photo"/>
                </div>
                <div className="swiper-color-list">
                    <div className="swiper-color-item"></div>
                    <div className="swiper-color-item"></div>
                    <div className="swiper-color-item"></div>
                </div>
                <div className="swiper-item-name">Курточка Stone-Island</div>
            </div>
            <div className="swiper-item">
                <div className="swiper-item-photo">
                    <img src="/img/product3-1.jpg" alt="photo"/>
                </div>
                <div className="swiper-color-list">
                    <div className="swiper-color-item"></div>
                    <div className="swiper-color-item"></div>
                    <div className="swiper-color-item"></div>
                </div>
                <div className="swiper-item-name">Курточка Stone-Island</div>
            </div>
            <div className="swiper-item">
                <div className="swiper-item-photo">
                    <img src="/img/swiper1.jpg" alt="photo"/>
                </div>
                <div className="swiper-color-list">
                    <div className="swiper-color-item"></div>
                    <div className="swiper-color-item"></div>
                    <div className="swiper-color-item"></div>
                </div>
                <div className="swiper-item-name">Курточка Stone-Island</div>
            </div>
            <div className="swiper-item">
                <div className="swiper-item-photo">
                    <img src="/img/product8.jpg" alt="photo"/>
                </div>
                <div className="swiper-color-list">
                    <div className="swiper-color-item"></div>
                    <div className="swiper-color-item"></div>
                    <div className="swiper-color-item"></div>
                </div>
                <div className="swiper-item-name">Курточка Stone-Island</div>
            </div>
        </div>
        <div className="swiper-sliders">
            <button className="button-slider">
                {'<'}
            </button>
            <button className="button-slider">
                {'>'}
            </button>
        </div>
    </section>
        </>
    )
}
