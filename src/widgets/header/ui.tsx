import {JSX, useState} from "react";

export function Header(): JSX.Element{
    const [isClosed, setIsClosed] = useState(true);
    const burgerClickHandler = () => {
        setIsClosed(!isClosed)
    }
    return (
    <header className="opened">
        <div className="header-top-side">
            <div className="header-left-side">
                <button className="burger-menu" onClick={burgerClickHandler}></button>
                <button>CATALOG</button>
                <button className="sale">SALE</button>
            </div>
            <div className="header-centre-side">SHE`S U</div>
            <div className="header-right-side">
                <button className="login">
                    <img src="/img/lk.png" alt="profile"/>
                </button>
                <button className="basket">
                    <img src="/img/basket.png" alt="basket"/>
                </button>
            </div>
        </div>

        {isClosed ? <></> : <div className="header-links">
            <div className="header-links-item">
                <span>BRAND</span>
                <span>CARE</span>
            </div>
            <div className="header-links-item">
                <span>CATALOG</span>
                <span className="sale">SALE</span>
            </div>
            <div className="header-links-item">
                <span>INSTAGRAM</span>
                <span>FACEBOOK</span>
                <span>VK</span>
            </div>
        </div>}
    </header>)
}
