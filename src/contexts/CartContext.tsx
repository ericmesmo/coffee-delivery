import { createContext, ReactNode, useState } from 'react'
import { CartProps, CheckoutProps, Coffee } from '../reducers/cart/reducer'

interface CartContextType {
    cart: CartProps[]
    checkout: CheckoutProps[]
    addCoffeeToCart: (coffee: Coffee, qtyCoffee: number) => void
    incrementQtyCoffeeOfCart: (idCoffee: number) => void
    decrementQtyCoffeeOfCart: (idCoffee: number) => void
    removeCoffeeOfCart: (idCoffee: number) => void
    completOrder: (checkout: CheckoutProps) => void
}

interface CartContextProviderProps {
    children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
    const [cart, setCart] = useState<CartProps[]>([])
    const [checkout, setCheckout] = useState<CheckoutProps[]>([])

    function addCoffeeToCart(coffee: Coffee, qtyCoffee: number) {
        setCart((prevState) => [
            ...prevState,
            {
                coffee,
                qty: qtyCoffee,
            },
        ])
    }

    function incrementQtyCoffeeOfCart(idCoffee: number) {
        const incrementedCoffee = cart.map((item) => {
            if (item.coffee.id === idCoffee) {
                return { ...item, qty: item.qty + 1 }
            } else {
                return item
            }
        })

        setCart(incrementedCoffee)
    }

    function decrementQtyCoffeeOfCart(idCoffee: number) {
        const decrementedCoffee = cart.map((item) => {
            if (item.coffee.id === idCoffee) {
                return { ...item, qty: item.qty - 1 }
            } else {
                return item
            }
        })

        setCart(decrementedCoffee)
    }

    function removeCoffeeOfCart(idCoffee: number) {
        const cartWithoutCoffee = cart.filter(
            (item) => item.coffee.id !== idCoffee,
        )

        setCart(cartWithoutCoffee)
    }

    function completOrder(checkout: CheckoutProps) {
        setCart([])
        setCheckout((prevState) => [...prevState, checkout])
    }

    return (
        <CartContext.Provider
            value={{
                cart,
                checkout,
                addCoffeeToCart,
                incrementQtyCoffeeOfCart,
                decrementQtyCoffeeOfCart,
                removeCoffeeOfCart,
                completOrder,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}
