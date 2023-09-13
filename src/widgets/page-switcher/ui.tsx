import {JSX} from "react";

export function PageSwitcher(): JSX.Element{
    return (
        <div className="page-switcher">
            <div className="page-switcher-item">
                {'<'}
            </div>
            <div className="page-switcher-item number active-page">1</div>
            <div className="page-switcher-item number">2</div>
            <div className="page-switcher-item number">3</div>
            <div className="page-switcher-item number">4</div>
            <div className="page-switcher-item number">5</div>
            <div className="page-switcher-item">{'>'}</div>
        </div>
    )
}
