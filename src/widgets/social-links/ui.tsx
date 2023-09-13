import {JSX} from "react";

export function SocialLinks(): JSX.Element {
    return (
        <>
            <h1 className="social-links-title">SOCIAL LINKS</h1>
            <section className="social-links">
                <div className="social-links-item">
                    <h2 className="social-links-item-title">INSTAGRAM</h2>
                    <div className="social-links-item-description">Запрещенная в россии организация</div>
                </div>
                <div className="social-links-item">
                    <h2 className="social-links-item-title">VKONTAKTE</h2>
                    <div className="social-links-item-description">Присоединяйся к нашему сообществу</div>
                </div>
                <div className="social-links-item">
                    <h2 className="social-links-item-title">TELEGRAM</h2>
                    <div className="social-links-item-description">Все новинки и акции с уведомлениями</div>
                </div>
            </section>
        </>
    )
}
