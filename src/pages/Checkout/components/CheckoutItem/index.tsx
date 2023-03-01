import { Trash } from 'phosphor-react'
import { useContext } from 'react'
import { ButtonMinusPlus } from '../../../../components/ButtonMinusPlus'
import { CartContext } from '../../../../contexts/CartContext'
import { CartItem, DetailsCartItem, Divider, InfoCartItem } from './styles'

interface CheckoutItemProps {
    idCoffee: number
    name: string
    qty: number
    price: number
    img: string
}

export function CheckoutItem({
    idCoffee,
    name,
    qty,
    price,
    img,
}: CheckoutItemProps) {
    const {
        incrementQtyCoffeeOfCart,
        decrementQtyCoffeeOfCart,
        removeCoffeeOfCart,
    } = useContext(CartContext)

    const amountItem = qty * price

    return (
        <>
            <CartItem>
                <InfoCartItem>
                    <img src={img} alt="" />
                    <DetailsCartItem>
                        <span>{name}</span>
                        <div>
                            <ButtonMinusPlus
                                qtyCoffee={qty}
                                handleAddQtyCoffee={() =>
                                    incrementQtyCoffeeOfCart(idCoffee)
                                }
                                handleRemoveQtyCoffee={() =>
                                    decrementQtyCoffeeOfCart(idCoffee)
                                }
                            />
                            <button
                                onClick={() => removeCoffeeOfCart(idCoffee)}
                            >
                                <span>
                                    <Trash size={16} />
                                </span>
                                Remover
                            </button>
                        </div>
                    </DetailsCartItem>
                </InfoCartItem>
                <span>
                    R${' '}
                    {amountItem.toLocaleString('pt-BR', {
                        minimumFractionDigits: 2,
                    })}
                </span>
            </CartItem>

            <Divider />
        </>
    )
}
