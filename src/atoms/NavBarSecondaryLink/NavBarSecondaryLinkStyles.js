import { styled } from "styled-components";


export const NavBarSecondaryLinkStyle = styled.li`
    list-style: none;

    & a {
        display: inline-flex;
        align-items: center;
        font-size: 0.9375rem;
        color: var(--c-grey-80);
        font-weight: var(--f-medium);
        text-decoration: underline;
        transition: all 0.4s ease-in-out;

        &:hover {
            opacity: 0.75;
        }
    }

    @media (min-width: 768px) {
        & a {
            font-size: 1rem;
        }
    }
`;