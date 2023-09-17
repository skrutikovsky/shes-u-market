import {JSX, useEffect} from "react";
import {Header} from "../../widgets/header";
import {Footer} from "../../widgets/footer";
import {ProductList} from "../../widgets/product-list";

export function CatalogPage():JSX.Element{
    useEffect(()=>{
        window.scrollTo(0,0);
    },[])
    return (
        <>
            <Header></Header>
            <ProductList/>
            <Footer></Footer>
        </>
    )
}
