import React, {JSX, useState} from "react";
import {Link} from "react-router-dom";
import {AppRouter} from "../../app/const/consts";

export function Header(): JSX.Element{
    const [isClosed, setIsClosed] = useState(true);
    const burgerClickHandler = () => {
        setIsClosed(!isClosed)
    }
    return (
    <header className={isClosed?'':"opened"}>
        <div className="header-top-side">
            <div className="header-left-side">
                <button className="burger-menu" onClick={burgerClickHandler}></button>
                <button><Link to={AppRouter.CATALOG}>CATALOG</Link></button>
                <button className="sale"><Link className="sale" to={AppRouter.SALE}>SALE</Link></button>
            </div>
            <div className="header-centre-side"><Link to={AppRouter.MAIN}>SHE`S U</Link></div>
            <div className="header-right-side">
                <button className="login">
                    <Link to={AppRouter.PROFILE}><img src="/img/lk.png" alt="profile"/></Link>
                </button>
                <button className="basket">
                    <Link to={AppRouter.BASKET}><img src="/img/basket.png" alt="basket"/></Link>
                </button>
            </div>
        </div>

        {isClosed ? <></> : <div className="header-links">
            <div className="header-links-item">
                <span><Link to={AppRouter.MAIN}>BRAND</Link></span>
                <span>CARE</span>
            </div>
            <div className="header-links-item">
                <span><Link to={AppRouter.CATALOG}>CATALOG</Link></span>
                <span ><Link className="sale" to={AppRouter.SALE}>SALE</Link></span>
            </div>
            <div className="header-links-item">
                <span>INSTAGRAM</span>
                <span>FACEBOOK</span>
                <span>VK</span>
            </div>
        </div>}
    </header>)
}
