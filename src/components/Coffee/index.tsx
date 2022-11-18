import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";
import { CoffeeContainer } from "./styles";

import coffeeSample from './../../assets/coffees/Coffee0.png'
import { ICartProductProps, IProductProps } from "../../pages/Home";
import { useState } from "react";

interface IProductCoffeeProps {
    data: IProductProps
    handleSelectCoffee: (data: ICartProductProps) => void
}

export function CoffeeComp({ data, handleSelectCoffee }: IProductCoffeeProps) {

    const [product, setProduct] = useState<ICartProductProps>()
    const [count, setCount] = useState(1)
    const { description, imageURL, name, price, tags, id } = data

    const sumPrice = price / 100

    function handleCountPlusCoffee() {
        setCount(state => state += 1)
    }

    function handleCountMinusCoffee() {
        if (count === 1) {
            return
        }
        setCount(state => state -= 1)
    }

    function addCoffeeToCart() {
        const total = Number((sumPrice * count).toFixed(1))

        handleSelectCoffee({
            id,
            price: sumPrice,
            quantity: count,
            total
        })
    }

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
                            <Minus size={14} weight="bold" onClick={handleCountMinusCoffee} />
                            <span>{count}</span>
                            <Plus size={14} weight="bold" onClick={handleCountPlusCoffee} />
                        </div>
                        <button>
                            <ShoppingCart
                                size={22}
                                weight="fill"
                                onClick={addCoffeeToCart}
                            />
                        </button>
                    </div>
                </footer>
            </div>
        </CoffeeContainer>
    )
}