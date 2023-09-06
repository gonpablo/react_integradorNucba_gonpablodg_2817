import { styled } from "styled-components";

export const HomeButtonsContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    overflow: auto;
    gap: 0.8rem;


    @media (min-width: 768px) {
        justify-content: center;
        margin: 0 auto;
    }
`;

export const HomeButtonsBottom = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2.5rem;
`;


