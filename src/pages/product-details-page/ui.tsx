import {Fragment, JSX, useEffect} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Mousewheel} from "swiper";
import {Header} from "../../widgets/header";
import {ProductCard} from "../../entities/product-card";
import {Footer} from "../../widgets/footer";

export function ProductDetailsPage(): JSX.Element {
    useEffect(()=>{
        window.scrollTo(0,0);
    },[])
    return (
        <Fragment>
            <Header></Header>
            <Swiper
                modules={[Mousewheel]}
                slidesPerView={'auto'}
                loop={true}
                mousewheel={{
                    invert: true, // для инверсии направления прокрутки
                    sensitivity: 1, // для установки чувствительности колесика мыши
                }}
                freeMode={true}
            >
                <SwiperSlide className="details-back-img"><img src="/img/product1.jpg" alt={"product"}/></SwiperSlide>
                <SwiperSlide className="details-back-img"><img src="/img/product2.jpg" alt={"product"}/></SwiperSlide>
                <SwiperSlide className="details-back-img"><img src="/img/product3.jpg" alt={"product"}/></SwiperSlide>
                <SwiperSlide className="details-back-img"><img src="/img/product4.jpg" alt={"product"}/></SwiperSlide>
                <SwiperSlide className="details-back-img"><img src="/img/product5.jpg" alt={"product"}/></SwiperSlide>
                <SwiperSlide className="details-back-img"><img src="/img/product6.jpg" alt={"product"}/></SwiperSlide>
                <SwiperSlide className="details-back-img"><img src="/img/product7.jpg" alt={"product"}/></SwiperSlide>
                <SwiperSlide className="details-back-img"><img src="/img/product8.jpg" alt={"product"}/></SwiperSlide>
            </Swiper>
            <div className="details-window">
                <div className={'details-window-top'}>
                    <div>Курточка Stone Island</div>
                    <button>в корзину</button>
                </div>
                <div className={'details-window-stock'}>
                    <div>9999Р</div>
                    <div className={'in-stock'}>
                        <div className={'stock-true'}></div>
                        <div>В наличии</div>
                    </div>
                </div>
                <div className={'details-description'}>Костюм из невероятно приятной к телу легкой гипоаллергенной ткани с рубашкой свободного кроя и шортами на резинке.

                    100% гипоаллергенный полиэстер </div>
                <div className={'details-options'}>
                    <div className="details-options-container">
                        <ul className={'details-color'}>
                            <li>green</li>
                            <li>white</li>
                            <li>black</li>
                        </ul>
                    </div>
                    <div className="details-options-container">
                        <ul className={'details-color'}>
                            <li>L</li>
                            <li>M</li>
                            <li>S</li>
                        </ul>
                    </div>
                </div>
                <div className={'details-similar-title'}>Похожие товары</div>
                <div className={'details-similar'}>
                    <div className={'details-similar-container'}>
                        <ProductCard></ProductCard>
                        <ProductCard></ProductCard>
                        <ProductCard></ProductCard>
                        <ProductCard></ProductCard>
                        <ProductCard></ProductCard>
                        <ProductCard></ProductCard>
                    </div>
                </div>
            </div>
            <Footer/>
        </Fragment>
    )
}
