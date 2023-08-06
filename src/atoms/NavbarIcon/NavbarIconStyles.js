import { styled } from "styled-components";


export const NavbarIconStyle = styled.li`
    list-style: none;
    
    &.--dropdown {
        display: flex;
        align-items: center;
        position: relative;
        height: 100%;
    }

    & a {
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
    }
`;