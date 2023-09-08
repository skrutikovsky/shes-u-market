import {JSX} from "react";

type TitleProp = {
    content: string
}
export default function Title({content}: TitleProp): JSX.Element {
    return (
        <h1 className="swiper-title">content</h1>
    )
}
