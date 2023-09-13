import {JSX} from "react";

export function About(): JSX.Element{
    return (
        <section className="about">
            <div className="about-description">
                <h1>SHE`S U</h1>
                <h2>Российский street fashion бренд авангардной мужской и женской одежды основанный в 2019 году.</h2>
                <h3>Бренд сочетает в себе актуальные базовые street wear изделия и культовые тренды мировой уличной моды
                    <br/>Мы создаем наши изделия ради тысячи восторженных взглядов на вас, свободы самовыражения и любви
                        к жизни в любом ее проявлении.
                        Мы растем вместе с вами, с каждым прекрасным человеком, который соприкоснулся с нашим продуктом
                        и брендом
                </h3>
                <h4>Шестакова Яна<br/>основатель бренда SHE`S U</h4>
            </div>
            <div className="about-video">
                <video autoPlay preload="auto" loop muted
                       src="https://10.react.pages.academy/static/film/video/dog.mp4"></video>
            </div>
        </section>

    )
}
