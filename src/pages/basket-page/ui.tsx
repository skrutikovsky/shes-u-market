import React, {Fragment, JSX} from "react";
import {ProductInBasket} from "../../entities/product-in-basket";
import {SwiperProducts} from "../../widgets/swiper-products";
import {Header} from "../../widgets/header";
import {Footer} from "../../widgets/footer";
import {PayFields} from "../../features/pay-fields";

export function BasketPage(): JSX.Element{
    return (
        <Fragment>
            <Header/>
            <main className="basket-page">
                <div className="added-product-list">
                    <div className="basket-counter">Корзина(1)</div>
                    <div className="products-container">
                        <ProductInBasket/>
                        <ProductInBasket/>
                        <ProductInBasket/>
                        <ProductInBasket/>
                    </div>
                    <PayFields/>
                </div>
                <SwiperProducts title={'YOU LIKE'}/>
            </main>
            <Footer/>
        </Fragment>
    )
}
