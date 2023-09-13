import {JSX} from "react";

export function ProductCard(): JSX.Element{
    return (
        <div className="product-card">
            <img src="/img/product2.jpg" alt="product"/>
            <div className="product-name">Курточка Stone Island</div>
            <div className="product-cost">9.999Р</div>
        </div>
    )
}
