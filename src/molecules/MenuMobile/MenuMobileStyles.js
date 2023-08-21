import { styled } from "styled-components";

export const MenuMobileStyles = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0rem;
    bottom: 0rem;
    left: 0rem;
    right: 0rem;
    background-color: var(--c-grey-0);
    z-index: 9999999;
    opacity: 0;
    visibility: hidden;
    transform: translate(0px, 100%);
    transition: all 0.5s ease-in-out;

    &.--active {
        opacity: 1;
        transform: translate(0px, 0%);
        visibility: visible;
    }

    @media (min-width: 768px) {
        display: none;
    }
`;

export const MenuMobileTop = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 1.25rem 1.25rem 1.25rem 1.25rem;
    background-color: var(--c-grey-10);

    & svg {
        cursor: pointer;
        margin-right: 0.5rem;
        font-size: 1.8rem;
        margin-right: 0.6rem
    }
`;


export const MenuMobileNav = styled.nav`
    flex: 1;
    padding: 1.5625rem 1.25rem 1.5625rem 1.25rem;
    overflow: auto;
    

    & ul {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        grid-gap: 0.5rem;

        & li, a {
            width: 100%;
        }
    }
`;

export const MenuMobileFooter = styled.div`
    display: flex;
    align-items: center;
    padding: 1.875rem 1.25rem;
    position: sticky;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: var(--s-box-shadow-center);
    border-top: 0.0625rem solid var(--c-grey-20);
    background-color: var(--c-grey-0);

    & ul {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
`;