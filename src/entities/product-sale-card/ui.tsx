import {JSX} from "react";

export function ProductSaleCard(): JSX.Element{
    return (
        <div className="product-card">
            <div className="discount">-30%</div>
            <img src="/img/product2.jpg" alt="product"/>
            <div className="product-name">Курточка Stone Island</div>
            <div className="product-cost"><del>9.999Р</del> 6999Р</div>
        </div>
)
}
