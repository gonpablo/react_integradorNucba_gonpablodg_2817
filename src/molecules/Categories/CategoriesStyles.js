import { styled } from "styled-components";
import { ButtonStyle } from "../../atoms/Button/ButtonStyles";

export const ButtonCategories = styled(ButtonStyle)`
    font-size: 0.875rem;
    height: 2.1875rem;

    & svg {
        font-size: 1rem;
    }   
    
    background-color:  ${({ color }) => color ? "var(--c-primary)" : "var(--c-grey-5)"};
    color:  ${({ color }) => color ? "var(--c-grey-100)" : "var(--c-grey-90)"};

    &:hover {
        background-color:  ${({ color }) => color ? "var(--c-primary-hover)" : "var(--c-grey-20)"};
    }
`;