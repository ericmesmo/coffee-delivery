import styled from 'styled-components'

export const SuccessContainer = styled.main`
    display: flex;
    flex: 1;

    flex-direction: column;

    h1 {
        font-weight: 800;
        color: ${(props) => props.theme['yellow-dark']};

        margin-top: 2.5rem;
    }

    & > span {
        font-size: 1.25rem;
        color: ${(props) => props.theme['base-subtitle']};
    }

    & > div {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;

        margin-top: 2.5rem;

        @media screen and (max-width: 768px) {
            flex-direction: column;
            gap: 2rem;
        }
    }
`

export const OrderInfoBorder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    border-radius: 6px 36px;
    background: linear-gradient(
        90deg,
        ${(props) => props.theme.yellow},
        ${(props) => props.theme.purple}
    );

    padding: 1px;
    /* overflow: hidden; */

    > div {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 100%;
        padding: 2.5rem;

        background: ${(props) => props.theme.background};

        border: 1px solid transparent;
        border-radius: 6px 36px;
    }
`

export const OrderInfoItem = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;

    > span {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 32px;
        height: 32px;
        padding: 0.5rem;

        border-radius: 1000px;
        color: ${(props) => props.theme.white};

        &[data-state='purple'] {
            background: ${(props) => props.theme.purple};
        }

        &[data-state='yellow'] {
            background: ${(props) => props.theme.yellow};
        }

        &[data-state='yellow-dark'] {
            background: ${(props) => props.theme['yellow-dark']};
        }
    }

    > p {
        color: ${(props) => props.theme['base-text']};
    }
`
