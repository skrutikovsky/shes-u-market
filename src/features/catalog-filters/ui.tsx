import {JSX} from "react";


export function CatalogFilters():JSX.Element{
    return (
        <div className="product-filter">
            <ul className="filter-container">
                <li><span>Фильтр</span><span>Все фильтры \/</span></li>
                <li>Лифы</li>
                <li>Пояски</li>
                <li>Трусики</li>
                <li>Комплекты</li>
                <li>Все фильтры</li>
            </ul>
        </div>
    )
}
