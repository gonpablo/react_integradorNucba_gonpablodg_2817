import { styled } from "styled-components";


export const SocialStyle = styled.a`
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--c-grey-0);
    border-radius: 50%;
    margin-right: 0.5rem;
    transition: all 0.4s ease;
    font-size: 0.9375rem;
    background-color: var(--c-grey-50);

    &:hover {
        opacity: 0.75;
    }
`;
