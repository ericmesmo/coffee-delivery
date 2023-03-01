import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

import { HeaderContainer } from './styles'

import logo from '../../assets/logo.svg'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Header() {
    const { cart } = useContext(CartContext)
    return (
        <HeaderContainer>
            <img src={logo} alt="" />

            <nav>
                <button>
                    <MapPin size={22} weight="fill" />
                    Porto Alegre, RS
                </button>
                <NavLink to="/checkout" title="Checkout">
                    {cart.length > 0 && <span>{cart.length}</span>}
                    <ShoppingCart size={22} weight="fill" />
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}
