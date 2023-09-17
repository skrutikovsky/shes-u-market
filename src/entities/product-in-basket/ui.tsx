import {JSX} from "react";
import {AppRouter} from "../../app/const/consts";
import {useNavigate} from "react-router-dom";

export function ProductInBasket(): JSX.Element{
    const navigate = useNavigate()
    return (
        <div className="added-product">
            <div className="product-left-side">
               <img onClick={()=>{navigate(AppRouter.DETAILS)}} src="/img/product1.jpg"/>
            </div>
            <div className="product-center-side">
                <div>Курточка Stone Island</div>
                <div className="product-color-counter">
                    <div className="product-props">
                        <div className="product-color">olive</div>
                        <div className="product-size">М</div>
                    </div>
                    <div className="product-counter">
                        <div>+</div>
                        <div>1</div>
                        <div>-</div>
                    </div>
                </div>
            </div>
            <div className="product-price">9.999Р</div>
            <button className="close-button">X</button>
        </div>
    )
}
