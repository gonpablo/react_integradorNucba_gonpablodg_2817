import { styled } from "styled-components";


export const FooterStyle = styled.footer`
    background-color: var(--c-grey-0);
    padding: 3.4375rem 0rem;
    z-index: 9999;
    position: relative;
    border-top: 0.0625rem solid var(--c-grey-10);
`;


export const FooterHolder = styled.div`
    margin: 0 auto;
    max-width: var(--l-container-width);
    padding: 0rem 0.9375rem;
`;


export const FooterItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 768px) {
        align-items: flex-start; 
    }
`;

export const FooterItemSocial = styled.div`
    display: flex;
`;

export const FooterTitle = styled.h3`
    color: var(--c-grey-100);
    font-size: 1.125rem;
    font-weight: var(--f-bold);
    margin-bottom: 1.25rem !important;

    @media (max-width: 768px) {
        text-align: center;
    }
`;


export const FooterNavbar = styled.nav`
    display: block;
    text-align: center;

    & ul {
        display: flex;
        grid-gap: 0.9375rem;
        flex-wrap: wrap;
        flex-direction: column;
    }

    @media (min-width: 768px) {
        text-align: left;
        
        & ul {
            grid-gap: 1.25rem;
        }
    }
`;

export const FooterInfoQr = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-gap: 0.9375rem;

    @media (min-width: 768px) {
        align-items: flex-start;
        grid-gap: 1.25rem;
    }

    & img:first-child {
        height: 3.125rem;
        width: auto;
    }

    & img:last-child {
        height: 0.92rem;
        width: auto;
    }
`;




