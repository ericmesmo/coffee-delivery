import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0;
    }

    body {
        background: ${(props) => props.theme.background};

    }

    h1 {
        font-family: 'Baloo 2', cursive;
        font-weight: bold;
        font-size: 1.125;
        line-height: 1.30;
    }

    input, textarea, button, span, p {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.3;
    }
`
