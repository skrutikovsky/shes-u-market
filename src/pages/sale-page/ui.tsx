import React, {JSX, useEffect} from "react";
import {Header} from "../../widgets/header";
import {Footer} from "../../widgets/footer";
import {ProductSaleList} from "../../widgets/product-sale-list";

export function SalePage():JSX.Element{
    useEffect(()=>{
        window.scrollTo(0,0);
    },[])
    return (
        <>
            <Header></Header>
            <ProductSaleList/>
            <Footer></Footer>
        </>
    )
}
