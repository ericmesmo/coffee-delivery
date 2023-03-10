import styled from 'styled-components'

export const LayoutContainer = styled.div`
    max-width: 90rem;
    height: 100vh;
    margin: 0 auto;
    padding: 0 1rem;
    background: ${(props) => props.theme.background};

    display: flex;
    flex-direction: column;
`
