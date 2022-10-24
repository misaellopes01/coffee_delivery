import { HomeContainer } from "./styles";
import bannerIMG from './../../assets/banner.png'
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

export function Home() {

    return (
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
    )
}