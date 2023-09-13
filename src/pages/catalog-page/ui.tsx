import {JSX} from "react";
import {Header} from "../../widgets/header";
import {Footer} from "../../widgets/footer";
import {ProductList} from "../../widgets/product-list";

export function CatalogPage():JSX.Element{
    return (
        <>
            <Header></Header>
            <ProductList/>
            <Footer></Footer>
        </>
    )
}
