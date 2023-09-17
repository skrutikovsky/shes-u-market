import {JSX, useEffect} from "react";
import {Header} from "../../widgets/header";
import {Collage} from "../../widgets/collage";
import {SwiperProducts} from "../../widgets/swiper-products";
import {SocialLinks} from "../../widgets/social-links/ui";
import {TopSale} from "../../widgets/top-sale";
import {About} from "../../widgets/about";
import {ScrollingImg} from "../../widgets/scrolling-img";
import {Footer} from "../../widgets/footer";

export function MainPage(): JSX.Element {
    useEffect(()=>{
        window.scrollTo(0,0);
    },[])
    return (
        <>
            <Header></Header>
            <Collage></Collage>
            <SwiperProducts title={'MUST HAVE'}></SwiperProducts>
            <SocialLinks></SocialLinks>
            <TopSale></TopSale>
            <About></About>
            <ScrollingImg></ScrollingImg>
            <Footer></Footer>
        </>
    )
}
