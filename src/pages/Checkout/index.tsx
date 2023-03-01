import {
    Bank,
    CreditCard,
    CurrencyDollar,
    MapPinLine,
    Money,
} from 'phosphor-react'

import * as RadioGroup from '@radix-ui/react-radio-group'
import * as zod from 'zod'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import {
    BillingItem,
    BillingItemsContainer,
    BillingItemTotal,
    BoxItems,
    ChecktouContainer,
    FormContainer,
    GridLayout2Columns,
    GridLayout3Columns,
    HeaderFormContainer,
    HeaderPaymentContainer,
    InputCep,
    LabelBillingItem,
    LabelTotalBillingItem,
    ListItemsContainer,
    OrderContainer,
    PaymentContainer,
    PaymentTypeContainer,
    ShippingAddressContainer,
} from './styles'

import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { CheckoutItem } from './components/CheckoutItem'
import { useNavigate } from 'react-router-dom'

const checkoutFormValidadtionSchema = zod.object({
    cep: zod.string().min(9, 'Informe o seu CEP de entrega'),
    street: zod.string().min(3, 'Informe o logradouro de entrega'),
    number: zod.string().min(3, 'Informe o número do logradouro de entrega'),
    complement: zod.string().min(3, 'Informe o complemento de entrega'),
    neighborhood: zod.string().min(3, 'Informe o bairro do local de entrega'),
    city: zod.string().min(3, 'Informe a cidade de entrega'),
    state: zod.string().min(2, 'Informe o estado da cidade de entrega'),
    paymentType: zod.string(),
})

type CheckoutFormData = zod.infer<typeof checkoutFormValidadtionSchema>

export function Checkout() {
    const { cart, completOrder } = useContext(CartContext)
    const navigate = useNavigate()

    const checkoutForm = useForm<CheckoutFormData>({
        resolver: zodResolver(checkoutFormValidadtionSchema),
        defaultValues: {
            cep: '',
            city: '',
            complement: '',
            neighborhood: '',
            number: '',
            state: '',
            street: '',
        },
    })

    const { handleSubmit, reset, register, setValue } = checkoutForm

    function handleSubmitCheckout(data: CheckoutFormData) {
        completOrder(data)
        reset()
        navigate('/success')
    }

    let amountItem = 0
    cart.forEach(({ coffee, qty }) => {
        amountItem += qty * coffee.price
    })

    const amountCheckout = amountItem + 3.5

    return (
        <ChecktouContainer>
            <OrderContainer>
                <form
                    id="checkout-form"
                    onSubmit={handleSubmit(handleSubmitCheckout)}
                >
                    <h2>Complete seu pedido</h2>
                    <ShippingAddressContainer>
                        <HeaderFormContainer>
                            <span>
                                <MapPinLine size={22} />
                            </span>
                            <div>
                                <h3>Endereço de Entrega</h3>
                                <span>
                                    Informe o endereço onde deseja receber o seu
                                    pedido
                                </span>
                            </div>
                        </HeaderFormContainer>

                        <FormContainer>
                            <InputCep
                                id="cep"
                                placeholder="CEP"
                                {...register('cep')}
                            />
                            <input
                                id="street"
                                placeholder="Rua"
                                {...register('street')}
                            />
                            <GridLayout2Columns>
                                <input
                                    id="number"
                                    placeholder="Número"
                                    {...register('number')}
                                />
                                <input
                                    id="complemento"
                                    placeholder="Complemento"
                                    {...register('complement')}
                                />
                            </GridLayout2Columns>
                            <GridLayout3Columns>
                                <input
                                    id="neighborhood"
                                    placeholder="Bairro"
                                    {...register('neighborhood')}
                                />
                                <input
                                    id="city"
                                    placeholder="Cidade"
                                    {...register('city')}
                                />
                                <input
                                    id="state"
                                    placeholder="UF"
                                    {...register('state')}
                                />
                            </GridLayout3Columns>
                        </FormContainer>
                    </ShippingAddressContainer>

                    <PaymentContainer>
                        <HeaderPaymentContainer>
                            <span>
                                <CurrencyDollar size={22} />
                            </span>
                            <div>
                                <h3>Pagamento</h3>
                                <span>
                                    O pagamento é feito na entrega. Escolha a
                                    forma que deseja pagar
                                </span>
                            </div>
                        </HeaderPaymentContainer>

                        <PaymentTypeContainer>
                            <RadioGroup.Root
                                id="paymentType"
                                {...register('paymentType')}
                                onValueChange={(value) => {
                                    setValue('paymentType', value)
                                }}
                            >
                                <RadioGroup.Item value="credit-card">
                                    <span>
                                        <CreditCard size={16} />
                                    </span>
                                    <label>Cartão de crédito</label>
                                </RadioGroup.Item>
                                <RadioGroup.Item value="debit-card">
                                    <span>
                                        <Bank size={16} />
                                    </span>
                                    <label>Cartão de débito</label>
                                </RadioGroup.Item>
                                <RadioGroup.Item value="cash">
                                    <span>
                                        <Money size={16} />
                                    </span>
                                    <label>Dinheiro</label>
                                </RadioGroup.Item>
                            </RadioGroup.Root>
                        </PaymentTypeContainer>
                    </PaymentContainer>
                </form>
            </OrderContainer>

            <ListItemsContainer>
                <h2>Cafés selecionados</h2>

                <BoxItems>
                    {cart.map(({ coffee, qty }) => {
                        return (
                            <CheckoutItem
                                key={coffee.id}
                                idCoffee={coffee.id}
                                name={coffee.name}
                                price={coffee.price}
                                qty={qty}
                                img={coffee.img}
                            />
                        )
                    })}

                    <BillingItemsContainer>
                        <BillingItem>
                            <LabelBillingItem>Total de itens</LabelBillingItem>
                            <LabelTotalBillingItem>
                                R${' '}
                                {amountItem.toLocaleString('pt-BR', {
                                    minimumFractionDigits: 2,
                                })}
                            </LabelTotalBillingItem>
                        </BillingItem>

                        <BillingItem>
                            <LabelBillingItem>Entrega</LabelBillingItem>
                            <LabelTotalBillingItem>
                                R$ 3,50
                            </LabelTotalBillingItem>
                        </BillingItem>

                        <BillingItemTotal>
                            <span>Total</span>
                            <span>
                                R${' '}
                                {amountCheckout.toLocaleString('pt-BR', {
                                    minimumFractionDigits: 2,
                                })}
                            </span>
                        </BillingItemTotal>
                    </BillingItemsContainer>

                    <button
                        type="submit"
                        onClick={checkoutForm.handleSubmit(
                            handleSubmitCheckout,
                        )}
                    >
                        Confirmar pedidos
                    </button>
                </BoxItems>
            </ListItemsContainer>
        </ChecktouContainer>
    )
}
