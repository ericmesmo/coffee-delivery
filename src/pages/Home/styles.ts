import styled from 'styled-components'

export const HomeContainer = styled.main`
    flex: 1;

    display: flex;
    flex-direction: column;
`

/**
 * Extrair list para component
 */
export const ListContainer = styled.div`
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    flex-direction: column;

    & > div > h2 {
        font-family: 'Baloo 2', cursive;
        font-weight: 800;
        font-size: 2rem;
        color: ${(props) => props.theme['base-subtitle']};

        margin-top: 2rem;
    }
`

export const ListCard = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;

    margin-top: 54px;
`
