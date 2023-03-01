import styled from 'styled-components'

export const CartItem = styled.div`
    width: 100%;
    display: flex;

    justify-content: space-between;
    align-items: flex-start;

    & > span {
        font-weight: 700;
        font-size: 1rem;
        color: ${(props) => props.theme['base-text']};
    }
`

export const InfoCartItem = styled.div`
    display: flex;
    gap: 1.25rem;

    & > img {
        width: 4rem;
        height: 4rem;
    }
`

export const DetailsCartItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    span {
        color: ${(props) => props.theme['base-subtitle']};
    }

    div {
        display: flex;
        gap: 0.5rem;
    }

    & > div > button {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        padding: 0 8px;
        border-radius: 6px;
        border: 0;
        background: ${(props) => props.theme['base-button']};

        text-transform: uppercase;
        font-size: 0.75rem;
        line-height: 1.6;

        &:hover {
            background: ${(props) => props.theme['base-hover']};
        }

        span {
            display: flex;
            justify-content: center;
            align-items: center;

            color: ${(props) => props.theme.purple};
        }
    }
`

export const Divider = styled.div`
    width: 100%;
    height: 0px;

    border: 1px solid ${(props) => props.theme['base-button']};
`
