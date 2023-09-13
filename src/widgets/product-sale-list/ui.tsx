import {JSX} from "react";
import {CatalogFilters} from "../../features/catalog-filters";
import {PageSwitcher} from "../page-switcher";
import {ProductSaleCard} from "../../entities/product-sale-card";

export function ProductSaleList():JSX.Element{
    return (
        <>
            <main className="catalog-page">
                <CatalogFilters/>
                <div className="product-list">
                    <ProductSaleCard/>
                    <ProductSaleCard/>
                    <ProductSaleCard/>
                    <ProductSaleCard/>
                    <ProductSaleCard/>
                    <ProductSaleCard/>
                    <ProductSaleCard/>
                    <ProductSaleCard/>
                    <ProductSaleCard/>
                    <ProductSaleCard/>
                    <ProductSaleCard/>
                    <ProductSaleCard/>
                    <ProductSaleCard/>
                    <ProductSaleCard/>
                </div>
                <PageSwitcher/>
            </main>
        </>
    )
}
