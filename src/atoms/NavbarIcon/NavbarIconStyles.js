import { styled } from "styled-components";
import { NavLink } from 'react-router-dom';

export const NavbarIconStyle = styled.li`
    list-style: none;
    
    &.--dropdown {
        display: flex;
        align-items: center;
        position: relative;
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
    transition: background-color 0.4s ease-in-out;

    &:hover {
        background-color: var(--c-grey-10);
    }
`;