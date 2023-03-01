import { ActionTypes } from './actions'

export interface Coffee {
    id: number
    name: string
    price: number
    subtitle: string
    tags: string[]
    img: string
}

export interface CartProps {
    coffee: Coffee
    qty: number
}

export interface CheckoutProps {
    cep: string
    street: string
    number: string
    complement: string
    neighborhood: string
    city: string
    state: string
    paymentType: string
}

export function cartReducer(state: CartProps, action: any) {
    switch (action.type) {
        case ActionTypes.ADD_COFFEE_TO_CART:
            return state
    }
}
