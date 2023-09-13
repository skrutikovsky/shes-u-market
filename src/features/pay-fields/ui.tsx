import {JSX} from "react";

export function PayFields(): JSX.Element {
    return (
        <div className="basket-payment">
            <div className="promo-code">
                <input placeholder="Промокод"/>
                <button>{'>'}</button>
            </div>
            <button className="button-buy">
                <div>Оформить заказ</div>
                <div>9.999 Р</div>
            </button>
        </div>
    )
}
