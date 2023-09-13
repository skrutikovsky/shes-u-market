import {JSX} from "react";
import {ProductCard} from "../../entities/product-card";
import {CatalogFilters} from "../../features/catalog-filters";
import {PageSwitcher} from "../page-switcher";

export function ProductList():JSX.Element{
    return (
        <>
            <main className="catalog-page">
                <CatalogFilters/>
                <div className="product-list">
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </div>
                <PageSwitcher/>
            </main>
        </>
    )
}
