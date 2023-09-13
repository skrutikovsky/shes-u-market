import React, {JSX} from "react";
import {Header} from "../../widgets/header";
import {Footer} from "../../widgets/footer";
import {ProductSaleList} from "../../widgets/product-sale-list";

export function SalePage():JSX.Element{
    return (
        <>
            <Header></Header>
            <ProductSaleList/>
            <Footer></Footer>
        </>
    )
}
