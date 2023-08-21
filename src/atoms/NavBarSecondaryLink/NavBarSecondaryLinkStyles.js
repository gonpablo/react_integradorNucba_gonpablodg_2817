import { styled } from "styled-components";
import { NavLink } from 'react-router-dom';

export const NavbarSecondaryLinkStyle = styled.li`
    list-style: none;
`;

export const NavbarSecondaryLinkHref = styled(NavLink)`
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

    & svg {
        vertical-align: center;
        font-size: 0.9375rem;
        margin-right: 0.5rem;
    }

    @media (min-width: 768px) {
        font-size: 1rem;

        & svg {
            font-size: 1rem;
        }
    }
`;