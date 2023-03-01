import styled from 'styled-components'

export const ActionsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.25rem;
    background: ${(props) => props.theme['base-button']};
    height: 38px;

    padding: 0.5rem;

    border-radius: 6px;

    & > button {
        display: flex;
        align-items: center;
        justify-content: center;

        border: 0;

        color: ${(props) => props.theme.purple};
    }

    & > span {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        text-align: center;
        color: ${(props) => props.theme['base-title']};
    }

    & > button:hover {
        background: ${(props) => props.theme['base-button']};
        color: ${(props) => props.theme['purple-dark']};
    }

    & > button:disabled {
        cursor: not-allowed;
    }
`
