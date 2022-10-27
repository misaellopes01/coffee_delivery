import styled from "styled-components";


export const HomeContainer = styled.main`
    width: 100%;
    height: 100%;

    .banner{
        padding: 5.875rem 0;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 0.6875rem;

        .content {
            width: 55%;
            display: flex;
            flex-direction: column;

            h1 {
                font-family: 'Baloo 2';
                font-weight: 800;
                font-size: 3rem;
                line-height: 1.3;
                color: ${props => props.theme['base-title']};
            }

            p {
                margin-top: 1rem;
                margin-bottom: 4.125rem;
                flex: none;
                flex-grow: 0;
                align-self: stretch;
                font-size: 1.25rem;
                padding-right: 2rem;
                color: ${props => props.theme['base-subtitle']};
            }

            ul {
                list-style: none;
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-template-rows: 1fr 1fr;
                row-gap: 1.25rem;
                

                li {
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    gap: 0.5rem;
                    color: ${props => props.theme['base-text']};
                }

                li:nth-child(1) span{
                    background: ${props => props.theme['yellow-dark']};
                }
                li:nth-child(2) span{
                    background: ${props => props.theme['base-text']};
                }
                li:nth-child(3) span{
                    background: ${props => props.theme['yellow']};
                }
                li:nth-child(4) span{
                    background: ${props => props.theme['purple']};
                }

                span {
                    width: 2rem;
                    height: 2rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50px;

                    svg {
                        color: ${props => props.theme['white']};
                    }

                }

                
    
            }
        }

        img {
            width: 40%;
        }
    }
`

export const MenuContainer = styled.section`
    width: 100%;
    height: 100%;
    padding-bottom: 9rem;

    h2 {
        font-family: 'Baloo 2';
        font-weight: 800;
        font-size: 2rem;
        color: ${props => props.theme['base-subtitle']};
        margin-bottom: 3.375rem;
    }

    .products {
        display: flex;
        flex-wrap: wrap;
        gap: 2.5rem 2rem;
    }

`