import {Fragment, JSX} from "react";

export function TopSale(): JSX.Element {
    return (
        <Fragment>
            <h1 className="top-sale-title">TOP SALE</h1>
            <section className="top-sale">
                <div className="top-sale-big-img">
                    <img src="/img/product1.jpg"/>
                </div>
                <div className="top-sale-list">
                    <div className="top-sale-list-item">
                        <img src="/img/product6.jpg"/>
                        <div>Курточка Stone Island</div>
                    </div>
                    <div className="top-sale-list-item">
                        <img src="/img/product2.jpg"/>
                        <div>Курточка Stone Island</div>
                    </div>
                    <div className="top-sale-list-item">
                        <img src="/img/product3.jpg"/>
                        <div>Курточка Stone Island</div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}
