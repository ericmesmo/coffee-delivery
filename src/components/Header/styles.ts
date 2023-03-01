import styled from 'styled-components'

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
        display: flex;
        gap: 0.75rem;

        padding: 2rem 0;

        button {
            width: 10rem;
            height: 2.375rem;

            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.25rem;

            color: ${(props) => props.theme['purple-dark']};
            border: 0;
            background-color: ${(props) => props.theme['purple-light']};
            border-radius: 6px;

            padding: 0.5rem;
            font-size: 0.875rem;

            &:hover {
                background-color: ${(props) => props.theme.purple};
                color: ${(props) => props.theme['purple-light']};
            }
        }

        a {
            width: 2.375rem;
            height: 2.375rem;

            display: flex;
            justify-content: center;
            align-items: center;

            color: ${(props) => props.theme['yellow-dark']};
            background-color: ${(props) => props.theme['yellow-light']};

            border-radius: 6px;
            position: relative;

            span {
                width: 1.25rem;
                height: 1.25rem;

                display: flex;
                align-items: center;
                justify-content: center;

                background: ${(props) => props.theme['yellow-dark']};
                border-radius: 999px;

                font-size: 0.75rem;
                font-weight: 700;
                text-align: center;
                letter-spacing: -0.06em;
                color: ${(props) => props.theme.white};

                position: absolute;
                top: -0.625rem;
                right: -0.625rem;
            }
        }
    }
`
