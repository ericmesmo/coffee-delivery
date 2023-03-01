import styled from 'styled-components'

export const BannerContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 5.875rem;
    gap: 1rem;

    @media screen and (max-width: 768px) {
        flex-direction: column-reverse;
        margin: 1rem 0;
    }
`

export const TitleContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h1 {
        font-weight: 800;
        size: 3rem;

        color: ${(props) => props.theme['base-title']};
    }

    span {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        size: 1.25rem;
    }
`

export const ImageContainer = styled.div`
    > img {
        width: 100%;
        height: 100%;
    }
`

export const ItemsContainer = styled.div`
    margin-top: 4.125rem;
    display: flex;
    flex: 1;
    flex-direction: row;
    gap: 2.5rem;

    div {
        display: flex;
        flex: 1;
        flex-direction: column;
        gap: 1.25rem;
    }

    span {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        color: ${(props) => props.theme['base-text']};

        display: flex;
        align-items: center;
        gap: 0.75rem;
    }
`
