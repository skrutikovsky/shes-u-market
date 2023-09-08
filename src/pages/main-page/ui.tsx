import {JSX} from "react";
import {Header} from "../../widgets/header";
import {Collage} from "../../features/collage";
import {Swiper} from "../../features/swiper";
import {SocialLinks} from "../../features/social-links/ui";
import {TopSale} from "../../features/top-sale";
import {About} from "../../features/about";
import {ScrollingImg} from "../../features/scrolling-img";
import {Footer} from "../../features/footer";

export function MainPage(): JSX.Element {
    return (
        <>
            <Header></Header>
            <Collage></Collage>
            <Swiper></Swiper>
            <SocialLinks></SocialLinks>
            <TopSale></TopSale>
            <About></About>
            <ScrollingImg></ScrollingImg>
            <Footer></Footer>
        </>
    )
}
