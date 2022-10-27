import styled from "styled-components";


export const CoffeeContainer = styled.div`
    width: 16rem;
    height: 19.375rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    padding: 0 1.25rem 1.5rem 1.25rem;
    background: ${props => props.theme['base-card']};
    border-radius: 6px 36px;

    img {
        position: relative;
        width: 7.5rem;
        top: -1.25rem;
    }

    .content {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        .tags {
            display: flex;
            gap: 0.25rem;

            > span {
                color: ${props => props.theme['yellow-dark']};
                background-color: ${props => props.theme['yellow-light']};
                padding: 0.3rem 0.5rem;
                text-transform: uppercase;
                font-weight: 700;
                font-family: 'Roboto';
                border-radius: 100px;
                font-size: 0.625rem;
            }
            margin-bottom: 1rem;
        }

        > strong {
            font-family: 'Baloo 2';
            font-weight: 700;
            font-size: 1.25rem;
            color: ${props => props.theme['base-subtitle']};
        }

        > p {
            text-align: center;
            color: ${props => props.theme['base-label']};
            font-size: 0.875rem;
            font-weight: 400;
            line-height: 1.3;
        }

        footer {
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            margin-top: 2rem;
            
            > span {
                font-size: 0.875rem;
                font-family: 'Roboto';
                font-weight: 400;

                strong {
                    font-family: 'Baloo 2';
                    font-weight: 800;
                    font-size: 1.5rem;
                }
            }

            > div {
                /* width: 7.375rem; */
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 0.5rem;
                

                .quantity {
                    background: ${props => props.theme['base-button']};
                    padding: 0.6rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.25rem;
                    border-radius: 6px;

                    span {
                        width: 1.25rem;
                        font-size: 1rem;
                        font-family: 'Roboto';
                        font-weight: 400;
                        text-align: center;
                        color: red;
                        color: ${props => props.theme['base-title']};
                    }

                    svg {
                        color: ${props => props.theme['purple']};
                        cursor: pointer;
                    }
                }

                a {
                    display: flex;  
                    padding: 0.48rem;
                    color: ${props => props.theme['white']};
                    background: ${props => props.theme['purple-dark']};
                    border-radius: 6px;
                }
            }
        }
    }

`