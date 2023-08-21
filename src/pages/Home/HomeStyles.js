import { styled } from "styled-components";

export const HomeButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    gap: 0.8rem;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`;
