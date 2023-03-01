import { Coffee } from './reducer'

export enum ActionTypes {
    ADD_COFFEE_TO_CART = 'ADD_COFFEE_TO_CART',
    REMOVE_COFFEE_OF_CART = 'REMOVE_COFFEE_OF_CART',
}

export function addCoffeeToCart(coffee: Coffee) {
    return {
        type: ActionTypes.ADD_COFFEE_TO_CART,
        payload: coffee,
    }
}

export function removeCoffeeOfCart() {
    return {
        type: ActionTypes.REMOVE_COFFEE_OF_CART,
    }
}
