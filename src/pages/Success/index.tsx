import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext } from 'react'
import bannerSuccess from '../../assets/banner-success.svg'
import { CartContext } from '../../contexts/CartContext'
import { OrderInfoBorder, OrderInfoItem, SuccessContainer } from './styles'

export function Success() {
    const { checkout } = useContext(CartContext)

    return (
        <SuccessContainer>
            <h1>Uhu! Pedido confirmado</h1>
            <span>Agora é só aguardar que logo o café chegará até você</span>

            <div>
                <OrderInfoBorder>
                    {checkout.map((item, i) => {
                        return (
                            <div key={i}>
                                <OrderInfoItem>
                                    <span data-state="purple">
                                        <MapPin weight="fill" />
                                    </span>
                                    <p>
                                        Entrega em{' '}
                                        <strong>
                                            {item.street}, {item.number} -{' '}
                                            Complemento:{' '}
                                            {item.complement
                                                ? item.complement
                                                : ''}
                                        </strong>
                                        <br></br>
                                        {item.neighborhood} - {item.city},{' '}
                                        {item.state}
                                    </p>
                                </OrderInfoItem>
                                <OrderInfoItem>
                                    <span data-state="yellow">
                                        <Timer weight="fill" />
                                    </span>
                                    <p>
                                        Previsão de entrega<br></br>
                                        <strong>20 min - 30 min</strong>
                                    </p>
                                </OrderInfoItem>
                                <OrderInfoItem>
                                    <span data-state="yellow-dark">
                                        <CurrencyDollar weight="regular" />
                                    </span>
                                    <p>
                                        Pagamento na entrega<br></br>
                                        <strong>
                                            {item.paymentType ===
                                                'credit-card' &&
                                                'Cartão de crédito'}
                                            {item.paymentType ===
                                                'debit-card' &&
                                                'Cartão de débito'}
                                            {item.paymentType === 'cash' &&
                                                'Dinheiro'}
                                        </strong>
                                    </p>
                                </OrderInfoItem>
                            </div>
                        )
                    })}
                </OrderInfoBorder>

                <img src={bannerSuccess} alt="" />
            </div>
        </SuccessContainer>
    )
}
