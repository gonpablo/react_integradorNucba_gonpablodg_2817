import { styled } from "styled-components";


export const AboutUsItem = styled.div`
    
    @media (max-width: 992px) {
        &:first-child {
            order: 2;
        }

        &:last-child {
            order: 1;
        }
    }
`;

export const AboutUsImage = styled.img`
        border-radius: 0.625rem;
        width: 100%;
        height: auto;
`;
