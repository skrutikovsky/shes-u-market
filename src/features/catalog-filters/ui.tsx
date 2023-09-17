import React, {JSX, useState} from "react";

export function CatalogFilters():JSX.Element{
    const [currFilter, setFiler] = useState('Все фильтры')
    const [isOpened, setIsOpened] = useState(false)
    const changeFilterHandler = (e: React.MouseEvent) => {
        e.preventDefault()
        setFiler(e.currentTarget.textContent||'')
    }
    return (
        <div className="product-filter" onMouseOver={()=>{setIsOpened(true)}} onMouseOut={()=>{setIsOpened(false)}}>
            <ul className="filter-container">
                <li><span>Фильтр</span><span>{currFilter} {isOpened ? '/\\' : `\\/`}</span></li>
                <li onClick={changeFilterHandler}>Лифы</li>
                <li onClick={changeFilterHandler}>Пояски</li>
                <li onClick={changeFilterHandler}>Трусики</li>
                <li onClick={changeFilterHandler}>Комплекты</li>
                <li onClick={changeFilterHandler}>Все фильтры</li>
            </ul>
        </div>
    )
}
