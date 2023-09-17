import {JSX} from "react";
import {useNavigate} from "react-router-dom";
import {AppRouter} from "../../../app/const/consts";

export function ProductCard(): JSX.Element{
    const navigate = useNavigate()
    return (
            <div onClick={()=>{navigate(AppRouter.DETAILS)}} className="product-card">
                <img src="/img/product2.jpg" alt="product"/>
                <div className="product-name">Курточка Stone Island</div>
                <div className="product-cost">9.999Р</div>
            </div>
    )
}
