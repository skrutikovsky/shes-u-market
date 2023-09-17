import {Fragment, JSX, useEffect} from "react";
import {Header} from "../../widgets/header";
import {Footer} from "../../widgets/footer";

export function ProfilePage(): JSX.Element {
    useEffect(()=>{
        window.scrollTo(0,0);
    },[])
    return (
        <Fragment>
            <Header></Header>
            <main className="personal-page">
                <div className="layout">
                    <div className="personal-page-buttons">Заказы</div>
                    <div className="personal-page-buttons exit">
                        <span>Выйти</span>
                        <img src="/img/Exit.png" alt="Exit"/>
                    </div>
                </div>
                <div className="layout">
                    <div className="personal-page-buttons">Данные доставки</div>
                    <div className="personal-page-buttons">Данные аккаунта</div>
                </div>
            </main>
            <Footer></Footer>
        </Fragment>
    )
}
