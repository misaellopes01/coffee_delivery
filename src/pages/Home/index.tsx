import { HomeContainer, MenuContainer } from "./styles";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import bannerIMG from './../../assets/banner.png'
import { CoffeeComp } from "../../components/Coffee";

import coffee0 from './../../assets/coffees/Coffee0.png'
import coffee1 from './../../assets/coffees/Coffee1.png'
import coffee2 from './../../assets/coffees/Coffee2.png'
import coffee3 from './../../assets/coffees/Coffee3.png'
import coffee4 from './../../assets/coffees/Coffee4.png'
import coffee5 from './../../assets/coffees/Coffee5.png'
import coffee6 from './../../assets/coffees/Coffee6.png'
import coffee7 from './../../assets/coffees/Coffee7.png'
import coffee8 from './../../assets/coffees/Coffee8.png'
import coffee9 from './../../assets/coffees/Coffee9.png'
import coffee10 from './../../assets/coffees/Coffee10.png'
import coffee11 from './../../assets/coffees/Coffee11.png'
import coffee12 from './../../assets/coffees/Coffee12.png'
import coffee13 from './../../assets/coffees/Coffee13.png'
import { useState } from "react";

export interface IProductProps {
    id: number
    name: string
    imageURL: string
    description: string
    price: number
    tags: {
        title: string
    }[]
}

const productsList: IProductProps[] = [
    {
        id: Number(Math.random().toFixed(7)),
        name: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        imageURL: coffee0,
        price: 990,
        tags: [
            {
                title: 'tradicional'
            }
        ]
    },
    {
        id: Number(Math.random().toFixed(7)),
        name: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
        imageURL: coffee1,
        price: 990,
        tags: [
            {
                title: 'tradicional'
            }
        ]
    },
    {
        id: Number(Math.random().toFixed(7)),
        name: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa',
        imageURL: coffee2,
        price: 990,
        tags: [
            {
                title: 'tradicional'
            }
        ]
    },
    {
        id: Number(Math.random().toFixed(7)),
        name: 'Expresso Gelado',
        description: 'Bebida preparada com café expresso e cubos de gelo',
        imageURL: coffee3,
        price: 990,
        tags: [
            {
                title: 'tradicional'
            },
            {
                title: 'gelado'
            }
        ]
    },
    {
        id: Number(Math.random().toFixed(7)),
        name: 'Café com Leite',
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        imageURL: coffee4,
        price: 990,
        tags: [
            {
                title: 'tradicional'
            },
            {
                title: 'com leite'
            }
        ]
    },
    {
        id: Number(Math.random().toFixed(7)),
        name: 'Latte',
        description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        imageURL: coffee5,
        price: 990,
        tags: [
            {
                title: 'tradicional'
            },
            {
                title: 'com leite'
            }
        ]
    },
    {
        id: Number(Math.random().toFixed(7)),
        name: 'Cappuccino',
        description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
        imageURL: coffee6,
        price: 990,
        tags: [
            {
                title: 'tradicional'
            },
            {
                title: 'com leite'
            }
        ]
    },
    {
        id: Number(Math.random().toFixed(7)),
        name: 'Macchiato',
        description: 'Café expresso misturado com um pouco de leite quente e espuma',
        imageURL: coffee7,
        price: 990,
        tags: [
            {
                title: 'tradicional'
            },
            {
                title: 'com leite'
            }
        ]
    },
    {
        id: Number(Math.random().toFixed(7)),
        name: 'Mocaccino',
        description: 'Café expresso com calda de chocolate, pouco leite e espuma',
        imageURL: coffee8,
        price: 990,
        tags: [
            {
                title: 'tradicional'
            },
            {
                title: 'com leite'
            }
        ]
    },
    {
        id: Number(Math.random().toFixed(7)),
        name: 'Chocolate Quente',
        description: 'Bebida feita com chocolate dissolvido no leite quente e café',
        imageURL: coffee9,
        price: 990,
        tags: [
            {
                title: 'tradicional'
            },
            {
                title: 'com leite'
            }
        ]
    },
    {
        id: Number(Math.random().toFixed(7)),
        name: 'Cubano',
        description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
        imageURL: coffee10,
        price: 990,
        tags: [
            {
                title: 'tradicional'
            },
            {
                title: 'alcoólico'
            },
            {
                title: 'gelado'
            }
        ]
    },

    {
        id: Number(Math.random().toFixed(7)),
        name: 'Havaiano',
        description: 'Bebida adocicada preparada com café e leite de coco',
        imageURL: coffee11,
        price: 990,
        tags: [
            {
                title: 'especial'
            }
        ]
    },
    {
        id: Number(Math.random().toFixed(7)),
        name: 'Árabe',
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        imageURL: coffee12,
        price: 990,
        tags: [
            {
                title: 'especial'
            }
        ]
    },
    {
        id: Number(Math.random().toFixed(7)),
        name: 'Irlandês',
        description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        imageURL: coffee13,
        price: 990,
        tags: [
            {
                title: 'especial'
            },
            {
                title: 'alcoólico'
            }
        ]
    }
]

interface ICartProductProps {
    id: number
    name: string
    imageURL: string
    price: number
    total: number
}


export function Home() {

    const [allProducts, setAllProducts] = useState<IProductProps[]>(productsList)
    const [cartProducts, setCartProducts] = useState<ICartProductProps[]>([])

    function handleSelectCoffee() {

    }

    return (
        <>
            <HomeContainer>
                <section className="banner">
                    <div className="content">
                        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                        <ul>
                            <li>
                                <span><ShoppingCart size={16} weight='fill' /></span>
                                Compra simples e segura
                            </li>
                            <li>
                                <span><Package size={16} weight='fill' /></span>
                                Embalagem mantém o café intacto
                            </li>
                            <li>
                                <span><Timer size={16} weight='fill' /></span>
                                Entrega rápida e rastreada
                            </li>
                            <li>
                                <span><Coffee size={16} weight='fill' /></span>
                                O café chega fresquinho até você
                            </li>
                        </ul>
                    </div>
                    <img src={bannerIMG} alt="Banner - Imagem de Copo de Coffee" />
                </section>
            </HomeContainer>
            <MenuContainer>
                <h2>Nossos cafés</h2>
                <section className="products">
                    {productsList.map((item) => (
                        <CoffeeComp
                            key={item.id}
                            data={item}

                        />
                    ))}
                </section>
            </MenuContainer>
        </>
    )
}