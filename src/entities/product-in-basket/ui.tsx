import {JSX} from "react";

export function ProductInBasket(): JSX.Element{
    return (
        <div className="added-product">
            <div className="product-left-side">
                <img src="/img/product1.jpg"/>
                <div>Курточка Stone Island</div>
            </div>
            <div className="product-center-side">
                <div className="product-color">olive</div>
                <div className="product-size">М</div>
            </div>
            <div className="product-counter">
                <div>+</div>
                <div>1</div>
                <div>-</div>
            </div>
            <div className="product-price">9.999Р</div>
            <button className="close-button">X</button>
        </div>
)
}
