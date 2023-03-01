import { ShoppingCart } from 'phosphor-react'

import { BuyContainer, CardContainer, FilterContainer } from './styles'

import { ButtonMinusPlus } from '../../../../components/ButtonMinusPlus'

import { Coffee } from '../../../../reducers/cart/reducer'
import { useContext, useState } from 'react'
import { CartContext } from '../../../../contexts/CartContext'

interface CardItemProps {
    coffee: Coffee
}

export function CardItem({ coffee }: CardItemProps) {
    const { addCoffeeToCart } = useContext(CartContext)
    const [qtyCoffee, setQtyCoffee] = useState(1)

    function handleAddQtyCoffee() {
        setQtyCoffee((prevState) => prevState + 1)
    }

    function handleRemoveQtyCoffee() {
        if (qtyCoffee > 1) {
            setQtyCoffee((prevState) => prevState - 1)
        }
    }

    return (
        <CardContainer>
            <img src={coffee.img} alt="" />

            <FilterContainer>
                {coffee.tags.map((item, i) => {
                    return <span key={i}>{item}</span>
                })}
            </FilterContainer>

            <h3>{coffee.name}</h3>
            <p>{coffee.subtitle}</p>

            <BuyContainer>
                <span>
                    R${' '}
                    <strong>
                        {coffee.price.toLocaleString('pt-BR', {
                            minimumFractionDigits: 2,
                        })}
                    </strong>
                </span>

                <div>
                    <ButtonMinusPlus
                        key={coffee.id}
                        qtyCoffee={qtyCoffee}
                        handleAddQtyCoffee={handleAddQtyCoffee}
                        handleRemoveQtyCoffee={handleRemoveQtyCoffee}
                    />
                    <button onClick={() => addCoffeeToCart(coffee, qtyCoffee)}>
                        <ShoppingCart size={22} weight="fill" />
                    </button>
                </div>
            </BuyContainer>
        </CardContainer>
    )
}
