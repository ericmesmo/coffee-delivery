import styled from 'styled-components'

export const ChecktouContainer = styled.main`
    display: grid;
    grid-template-columns: 7fr 5fr;
    gap: 2rem;
    align-items: flex-start;
    margin-top: 2.5rem;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        justify-content: center;
        gap: 1rem;
    }
`

export const OrderContainer = styled.div`
    form > h2 {
        font-family: 'Baloo 2', cursive;
        font-weight: 700;
        font-size: 1.125rem;
        color: ${(props) => props.theme['base-subtitle']};
    }
`

const BaseContainerBox = styled.div`
    flex: 1;
    padding: 2.5rem;
    background: ${(props) => props.theme['base-card']};
`

export const ShippingAddressContainer = styled(BaseContainerBox)`
    border-radius: 6px;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const FormContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
        padding: 0.75rem;
        background: ${(props) => props.theme['base-input']};
        border: 1px solid ${(props) => props.theme['base-button']};
        border-radius: 4px;

        font-family: 'Roboto', sans-serif;
        font-size: 0.875rem;
        font-weight: 400;
        color: ${(props) => props.theme['base-text']};

        &::placeholder {
            color: ${(props) => props.theme['base-label']};
        }
    }
`

export const HeaderFormContainer = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;

    & > span {
        color: ${(props) => props.theme['yellow-dark']};
    }

    & > div > h3 {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        color: ${(props) => props.theme['base-subtitle']};
    }

    & > div > span {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 0.875rem;
        color: ${(props) => props.theme['base-text']};
    }
`

export const InputCep = styled.input`
    width: 200px;
`

export const GridLayout2Columns = styled.div`
    display: grid;
    grid-template-columns: 200px auto;
    grid-column-gap: 0.75rem;

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
`

export const GridLayout3Columns = styled.div`
    display: grid;
    grid-template-columns: 200px auto 60px;
    grid-column-gap: 0.75rem;

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
`

export const PaymentContainer = styled(BaseContainerBox)`
    border-radius: 6px;
    margin-top: 0.75rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const HeaderPaymentContainer = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;

    & > span {
        color: ${(props) => props.theme.purple};
    }

    & > div > h3 {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        color: ${(props) => props.theme['base-subtitle']};
    }

    & > div > span {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 0.875rem;
        color: ${(props) => props.theme['base-text']};
    }
`

export const PaymentTypeContainer = styled.div`
    display: flex;
    flex: 1;

    div {
        display: flex;
        flex: 1;

        align-items: center;
        justify-content: space-between;
        gap: 0.75rem;

        @media screen and (max-width: 768px) {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
    }

    button {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        gap: 0.75rem;

        width: 100%;

        background: ${(props) => props.theme['base-button']};
        border-radius: 6px;
        border: 0;

        font-size: 0.75rem;
        line-height: 1.6;
        color: ${(props) => props.theme['base-text']};
        text-transform: uppercase;

        &[data-state='checked'] {
            background: ${(props) => props.theme['purple-light']};
            border: 1px solid ${(props) => props.theme.purple};
        }

        &:hover {
            background: ${(props) => props.theme['base-hover']};
        }
    }

    button > span {
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${(props) => props.theme.purple};
    }
`

export const ListItemsContainer = styled.div`
    flex-basis: 32.56%;
    flex-grow: 1;

    display: flex;
    flex-direction: column;
    gap: 0.9375rem;

    h2 {
        font-family: 'Baloo 2', cursive;
        font-weight: 700;
        font-size: 1.125rem;
        color: ${(props) => props.theme['base-subtitle']};
    }
`

export const BoxItems = styled.div`
    width: 100%;
    background: ${(props) => props.theme['base-card']};
    padding: 2.5rem;
    display: flex;
    flex-direction: column;

    gap: 1.5rem;

    border-radius: 6px 44px;

    & > button {
        height: 46px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 12px 8px;

        background: ${(props) => props.theme.yellow};
        border-radius: 6px;

        border: 0;

        font-weight: 700;
        font-size: 0.875rem;
        line-height: 1.6;
        text-transform: uppercase;

        color: ${(props) => props.theme.white};
        font-stretch: 100;

        &:hover {
            background: ${(props) => props.theme['yellow-dark']};
        }
    }
`

export const BillingItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    justify-content: center;
`

export const BillingItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
`

export const LabelBillingItem = styled.span`
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
`

export const LabelTotalBillingItem = styled.span`
    font-size: 1rem;
    color: ${(props) => props.theme['base-text']};
`

export const BillingItemTotal = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;

    span {
        font-weight: 700;
        font-size: 1.25rem;
        color: ${(props) => props.theme['base-subtitle']};
    }
`
