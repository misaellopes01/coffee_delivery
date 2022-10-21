import { HomeContainer } from "./styles";
import bannerIMG from './../../assets/banner.png'

export function Home() {

    return (
        <HomeContainer>
            <section className="banner">
                <div className="content">
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                    <ul>
                        <li>Compra simples e segura</li>
                        <li>Embalagem mantém o café intacto</li>
                        <li>Entrega rápida e rastreada</li>
                        <li>O café chega fresquinho até você</li>
                    </ul>
                </div>
                <img src={bannerIMG} alt="Banner - Imagem de Copo de Coffee" />
            </section>

        </HomeContainer>
    )
}