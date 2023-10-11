import { styled } from "styled-components";
import { NavLink } from 'react-router-dom';

export const HeaderStyle = styled.header`
    background-color: var(--c-grey-0);
    height: 4.6875rem;
    width: 100%;
    z-index: 99999;
    transition: all 250ms ease;
    position: sticky;
    top: 0;

    @media (min-width: 992px) {
        height: auto;
    }
`;

export const HeaderHolder = styled.div`
    padding: 0rem 0.375rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    max-width: var(--l-container-width);
    margin: 0 auto;

    @media (min-width: 992px) {
        padding: 0rem 0.9375rem;
        height: 6.875rem;
    }
`;

export const HeaderInnerLeft = styled.div`
    display: flex;
    align-items: center;

    @media (min-width: 992px) {
        margin-right: 2.8125rem;
    } 
`;

export const HeaderLogo = styled(NavLink)`
    display: flex;
    line-height: 0;

    & img {
        transition: all 0.4s ease-out;
        height: 2.5rem;
        width: auto;
    }

    @media (min-width: 768px) {
        & img {
            height: 2.8125rem;
            width: auto;
        }
    }

    @media (max-width: 992px) {
        position: absolute;
        left: 50%;
        transform: translate(-50%, 0px);
    }
`;

export const HeaderInnerCenter = styled.div`
    position: relative;
    flex: 1;
    justify-content: flex-start;
    align-items: center;
    display: flex;
    height: 100%;

    & input {
        font-size: 0.9375rem;
        padding: 1.25rem;
        border-radius: 0.3125rem;
        width: 100%;
        color: var(--c-grey-100);
        border: 0.0625rem solid;
        transition: all ease-in-out .1s;
        background-color: var(--c-grey-0);
        border-color: var(--c-grey-20); 

        &::placeholder {
            color: var(--c-grey-80);
        }
    }

    & svg {
        position: absolute;
        right: 1.1rem;
        cursor: pointer;
    }

    @media (max-width: 992px) {
        display: none;
    }
`;


export const HeaderInnerRight = styled.div`
    height: 100%;

    @media (min-width: 992px) {
        display: flex;
        align-items: center;
        margin-left: 2rem;
    }
`;

export const HeaderInnerNavbar = styled.nav`
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;
        width: 100%;
        grid-gap: 0.375rem;

        & ul {
            display: flex;
            align-items: center;
            height: 100%;
            grid-gap: 0.375rem;
        }
`;

export const HeaderFooter = styled.div`
    display: inline-flex;
    width: 100%;
    border-top: 0.0625rem solid var(--c-grey-10);
    padding: 0rem 0.9375rem;
    background-color: var(--c-grey-000);
    height: 4.0625rem;

    @media (max-width: 992px) {
        display: none;
    }
`;

export const HeaderFooterHolder = styled.div`
    width: 100%;
    
    @media (min-width: 992px) {
        max-width: var(--l-container-width);
        margin: 0 auto;
    }
`;
