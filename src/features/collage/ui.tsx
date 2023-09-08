import {JSX} from "react";

export function Collage(): JSX.Element{
    return (
        <section className="img-collage">
            <div className="img-collage-container">
                <img src="/img/main-1.jpg" alt="main"/>
            </div>
            <div className="img-collage-slider">
                <button className="img-collage-sliders-item button-slider">
                    {'<'}
                </button>
                <button className="img-collage-sliders-item button-slider">
                    {'>'}
                </button>
            </div>
            <h1 className="collage-title">SEASON SALE</h1>
        </section>)
}
