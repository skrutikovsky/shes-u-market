import {JSX} from "react";

export function Footer(): JSX.Element {
    return (
        <footer>
            <div className="footer-redirect">
                <div>@SHE`S U 2023</div>
                <div>SHE`S U</div>
                <div className="footer-redirect-right">
                    <a href="#">Instagram</a>
                    <a href="#">Facebook</a>
                    <a href="#">Vk</a>
                </div>
            </div>
            <div className="footer-rules">
                <a href='#'>Политика конфиденциальности</a>
                <a href='#'>Доставка и оплата</a>
                <a href='#'>Обмен и возврат</a>
                <a href='#'>Рекомендации по уходу</a>
                <a href='#'>Контакты и реквизиты</a>
            </div>
            <div className="footer-bottom">
                <div className="footer-bottom-director">ИП Шестакова Я. А. ИНН: 500712434428 | ООО «SSS» ИНН/КПП
                    9709094252/770901001
                </div>
                <div className="footer-bottom-pay">
                    <img src="/img/visa.png" alt="mastercard"/>
                    <img src="/img/mastercard.png" alt="visa"/>
                    <img src="/img/mir.png" alt="МИР"/>
                </div>
                <div className="footer-bottom-warning">*Facebook и Instagram являются продуктами компании Meta Platforms
                    inc. признанной экстремистской организацией и запрещенной в Российской Федерации.
                </div>
            </div>
        </footer>
    )
}
