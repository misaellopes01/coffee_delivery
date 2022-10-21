import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 6.5rem;

    nav {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.75rem;

        div {
            display: flex;
            align-items: center;
            gap: 0.25rem;
            color: ${props => props.theme['purple-dark']};
            font-family: 'Roboto';
            font-weight: 400;
            font-size: 0.875rem;
            border-radius: 6px;
            padding: 0.5rem;
            background: ${props => props.theme['purple-light']};
        }

        a {
            border-radius: 6px;
            padding: 0.5rem;
            background: ${props => props.theme['yellow-light']};
            font-weight: 400;
            font-size: 0.875rem;
            color: ${props => props.theme['yellow-dark']};

        }
    }
`