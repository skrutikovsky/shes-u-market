import {JSX} from "react";
import {AppRouter} from "../../app/const/consts";
import {useNavigate} from "react-router-dom";

export function ProductSaleCard(): JSX.Element{
    const navigate = useNavigate()
    return (
        <div onClick={()=> navigate(AppRouter.DETAILS)} className="product-card">
            <div className="discount">-30%</div>
            <img src="/img/product2.jpg" alt="product"/>
            <div className="product-name">Курточка Stone Island</div>
            <div className="product-cost"><del>9.999Р</del> 6999Р</div>
        </div>
)
}
