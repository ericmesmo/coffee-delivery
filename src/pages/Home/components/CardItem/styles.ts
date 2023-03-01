import styled from 'styled-components'

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 16rem;
    height: 19.375rem;

    background: ${(props) => props.theme['base-card']};
    padding-bottom: 1.25rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;

    /* padding: 1.5rem; */

    border-radius: 6px 36px;

    & > img {
        width: 120px;
        height: 120px;

        margin-top: -20px;
    }

    & > h3 {
        font-family: 'Baloo 2', cursive;
        font-weight: 700;
        font-size: 1.25rem;
        color: ${(props) => props.theme['base-subtitle']};

        margin-top: 1rem;
    }

    & > p {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 0.875rem;
        color: ${(props) => props.theme['base-label']};
        text-align: center;

        margin-top: 0.5rem;
    }
`

export const FilterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    flex-wrap: wrap;

    margin-top: 12px;

    & > span {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.25rem 0.5rem;

        background: ${(props) => props.theme['yellow-light']};
        border-radius: 100px;

        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        font-size: 0.625rem;
        text-transform: uppercase;
        color: ${(props) => props.theme['yellow-dark']};
    }
`

export const BuyContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2rem;

    & > div {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        justify-content: center;
    }

    & > div > button {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.5rem;

        background: ${(props) => props.theme['purple-dark']};
        color: ${(props) => props.theme['base-card']};
        border: 0;
        border-radius: 6px;
    }

    & > div > button:hover {
        background: ${(props) => props.theme.purple};
    }

    & > span {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 0.875rem;

        color: ${(props) => props.theme['base-text']};
    }

    & > span > strong {
        font-family: 'Baloo 2';
        font-weight: 800;
        font-size: 1.5rem;

        color: ${(props) => props.theme['base-text']};
    }
`
