import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";
import { CoffeeContainer } from "./styles";

import coffeeSample from './../../assets/coffees/Coffee0.png'
import { IProductProps } from "../../pages/Home";

interface IProductCoffeeProps {
    data: IProductProps
}

export function CoffeeComp({ data }: IProductCoffeeProps) {

    const { description, imageURL, name, price, tags, id } = data

    const sumPrice = price / 100


    return (
        <CoffeeContainer>
            <img src={imageURL} alt="" />
            <div className="content">
                <div className="tags">
                    {tags.map(item => <span key={Number(Math.random().toFixed(5))}>{item.title}</span>)}
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