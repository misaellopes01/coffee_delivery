import { HeaderContainer } from "./styles";
import { ShoppingCart, MapPin } from 'phosphor-react'

import logoCoffeeDelivery from '../../assets/coffee-delivery-logo.svg'
import { Link, NavLink } from "react-router-dom";

export function Header() {
    return (
        <HeaderContainer>
            <img src={logoCoffeeDelivery} alt="" />
            <nav>
                <div>
                    <MapPin
                        size={22}
                        weight="fill"
                    />
                    <p>
                        Lobito, BG
                    </p>
                </div>
                <Link to={""}>
                    <ShoppingCart
                        size={22}
                        weight="fill"
                    />
                </Link>
            </nav>
        </HeaderContainer>
    )
}