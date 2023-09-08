import {JSX} from "react";

export default function BasketButton(): JSX.Element{
    return (
        <button className="basket">
            <img src="%PUBLIC_URL%/public/img/basket.png" alt="basket"/>
        </button>
    )
}
