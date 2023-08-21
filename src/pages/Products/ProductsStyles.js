import { styled } from "styled-components";

export const ProductsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 1.5625rem;

    @media (min-width: 1266px) {
        grid-template-columns: 18.75rem calc(100% - 351px);
        grid-gap: 3.125rem;
    }
`;