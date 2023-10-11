import { styled } from "styled-components";
import { NavLink } from 'react-router-dom';

export const NavbarIconStyle = styled.li`
    list-style: none;
    position: relative;
    
    &.--dropdown {
        display: flex;
        align-items: center;
        height: 100%;
    }
`;

export const NavbarIconLinkHref = styled(NavLink)`
    font-size: 1.5rem;
    color: var(--c-grey-80);
    padding: 0.625rem;
    border-radius: 50%;
    line-height: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: background-color 0.4s ease-in-out;

    &:hover {
        background-color: var(--c-grey-10);
    }
`;

export const NavbarIconButton = styled.div`
    font-size: 1.5rem;
    color: var(--c-grey-80);
    padding: 0.625rem;
    border-radius: 50%;
    line-height: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
    transition: background-color 0.4s ease-in-out;

    &:hover {
        background-color: var(--c-grey-10);
    }
`;

export const NavbarIconCountCart = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 0.9375rem;
    height: 0.9375rem;
    border-radius: 50%;
    background-color: var(--c-primary);
    color: var(--c-grey-100);
    font-weight: var(--f-medium);
    font-size: 0.625rem;
    position: absolute;
    top: 0.3125rem;
    right: 0.3125rem;

    @media (min-width: 768px) {
        width: 1.125rem;
        height: 1.125rem;
        font-size: 0.6875rem;
        top: 0.1875rem;
        right: 0.1875rem;
    }
`;