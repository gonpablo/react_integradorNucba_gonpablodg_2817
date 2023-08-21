import { styled } from "styled-components";
import { NavLink } from 'react-router-dom';

export const NavbarLinkStyle = styled.li`
    list-style: none;

    &.--dropdown {
        display: flex;
        align-items: center;
        position: relative;
        height: 100%;
    }
`;

export const NavbarLinkHref = styled(NavLink)`
    display: inline-flex;
    align-items: center;
    font-size: 1.125rem;
    color: ${(props) => (props.featured ? "var(--c-primary-medium)" : "var(--c-grey-100)")};
    font-weight: var(--f-medium);
    padding: 0.625rem 0.9375rem;
    border-radius: 0.5rem;
    border: 1px solid var(--c-grey-000);
    border-color: ${(props) => (props.featured ? "var(--c-primary-medium)" : "transparent")};
    transition: all 0.4s ease-in-out;

    &:hover {
        background-color: ${(props) => (props.featured ? "var(--c-primary-hover)" : "var(--c-grey-5)")};
        border-color: ${(props) => (props.featured ? "var(--c-primary-hover)" : "var(--c-grey-5)")};
    }
    
    @media (min-width: 768px) {
        font-size: 1rem;
    }
`;
