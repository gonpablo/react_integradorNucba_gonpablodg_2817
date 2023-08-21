import { styled } from "styled-components";


export const GridStyle = styled.div`
    display: grid;
    grid-gap: ${(props) => (props.big ? "3.125rem" : "0.75rem;")};
    grid-template-columns: repeat(${({ gridsm }) => `${gridsm}`}, 1fr);

    @media (min-width: 768px) {
        grid-gap: ${(props) => (props.big ? "3.125rem" : "1.5625rem;")};
        grid-template-columns: repeat(${({ gridmd }) => `${gridmd}`}, 1fr);
    }

    @media (min-width: 1024px) {
        grid-template-columns: repeat(${({ gridxl }) => `${gridxl}`}, 1fr);
    }
`; 