import {JSX, useEffect} from "react";
import {Header} from "../../widgets/header";
import {Footer} from "../../widgets/footer";

export function CarePage():JSX.Element{
    useEffect(()=>{
        window.scrollTo(0,0);
    },[])
    return (
        <>
            <Header></Header>
            <div className="care">
                <div className="care-logo">
                    <img src="/img/basket.png"/>

                    <div>
                        Мы рады твоему выбору и очень хотим, чтобы изделия прослужили тебе как можно дольше, поэтому советуем ознакомиться с основными рекомендациями по уходу:
                    </div>
                </div>
                <div className='care-recommendation-list'>
                    <div className='care-recommendation'>
                        <div>01.</div>
                        <div><u>Рекомендуем стирать изделия на деликатном режиме (20-30 градусов)</u>, без отбеливателя, желательно с жидким порошком и обязательно с кондиционером. Если вы уверены, что стиральная машинка не деформирует изделия и цвет ткани при более высокой температуре, можно выбирать режим до 40 градусов.</div>
                    </div>
                    <div className='care-recommendation'>
                        <div>02.</div>
                        <div><u>Перед стиркой необходимо вывернуть изделие наизнанку</u>, так принт прослужит гораздо дольше. Сушка желательна в расправленном виде, не советуем пользоваться встроенной сушкой в машинке, она может испортить изделия, особенно из нежных тканей.</div>
                    </div>
                    <div className='care-recommendation'>
                        <div>03.</div>
                        <div><u>Не рекомендуем пользоваться утюгом</u> — идеально гладить отпаривателем, но если его нет под рукой, то стоит воспользоваться марлей и паром.</div>
                    </div>
                    <div className='care-recommendation'>
                        <div>04.</div>
                        <div>Если вы не уверены, что в химчистке есть щадящие методы очистки, то лучше избегать этот метод стирки и/или использовать только для изделий, которым этот метод необходим (например жакеты, пиджаки, верхняя одежда).</div>
                    </div>
                    <div className='care-recommendation'>
                        <div>05.</div>
                        <div>Для изделий из футера допускается остаток мягких волокон после носки изделия, это связано с высоким составом хлопка в полотне. Поэтому не рекомендуем носить темные вещи со светлыми, а светлые с тёмными. Также рекомендуем обязательно стираться перед первой ноской.</div>
                    </div>
                    <div className='care-recommendation'>
                        <div>06.</div>
                        <div>Изделия с высоким содержанием хлопка склонны к потере цвета при стирке со временем. Использование специальных кондиционеров поможет продлить яркость цвета твоему изделию.</div>
                    </div>
                    <div className='care-recommendation'>
                        <div>07.</div>
                        <div>Некоторые ткани, особенно нежные и требуют к себе деликатного отношения. С такими изделиями не советуем носить грубые ремни или другие детали, которые могут оставить зацепки и/или испортить внешний вид изделия.</div>
                    </div>
                    <div className='care-recommendation'>
                        <div>08.</div>
                        <div>Одежду для купания не советуем надолго оставлять в сложенном мокром виде, рекомендуем прежде расправить и дать подсохнуть, а также, при первой возможности высушить изделие в расправленном виде, предварительно произведя и/или полоскания изделия.</div>
                    </div>
                    <div className='care-recommendation'>
                        <div>09.</div>
                        <div>Изделия с перьями или другими съемными деталями перед стиркой обязательно снять, и промыть отдельно вручную, чтобы сохранить целостность детали.</div>
                    </div>
                    <div className='care-recommendation'>
                </div>
                <div className="care-wish">
                    Благодарим за выбор бренда MEOW’ONE и очень надеемся, что наш продукт будет доставлять сплошное удовольствие! Если возникнут какие-то вопросы по уходу или в процессе носки, обязательно пиши в наши социальные сети или на почту order@meowone.ru  – мы с радостью поможем в любой ситуации.
                    <div>Обнимаем, команда MEOW’ONE</div>
                </div>
                <div className="care-links">
                    <span>CATALOG</span>
                    <span className="sale">SALE</span>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </>
    )
}