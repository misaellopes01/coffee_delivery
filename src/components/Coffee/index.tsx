import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";
import { CoffeeContainer } from "./styles";

import coffeeSample from './../../assets/coffees/Coffee0.png'
import { IProductProps } from "../../pages/Home";

export function CoffeeComp(ItemData: IProductProps) {

    const { description, imageURL, name, price, tags } = ItemData

    const sumPrice = price / 100

    return (
        <CoffeeContainer>
            <img src={imageURL} alt="" />
            <div className="content">
                <div className="tags">
                    {tags.map(item => <span>{item.title}</span>)}
                </div>
                <strong>{name}</strong>
                <p>{description}</p>
                <footer>
                    <span>R$ <strong>{sumPrice.toPrecision(3)}</strong></span>
                    <div>
                        <div className="quantity">
                            <Minus size={14} weight="bold" />
                            <span>1</span>
                            <Plus size={14} weight="bold" />
                        </div>
                        <Link to={""}>
                            <ShoppingCart
                                size={22}
                                weight="fill"
                            />
                        </Link>
                    </div>
                </footer>
            </div>
        </CoffeeContainer>
    )
}