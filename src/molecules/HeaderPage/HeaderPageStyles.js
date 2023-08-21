import { styled } from "styled-components";
import { NavLink } from 'react-router-dom';

export const HeaderPageStyle = styled.section`
    padding: 1.5625rem 0rem 1.5625rem 0rem;
    height: auto;
    display: flex;
    align-items: center;
    background-color: var(--c-grey-10);
    position: relative;
    z-index: 0;

    @media (min-width: 768px) {
        padding: 2.1875rem 0rem 2.1875rem 0rem;
    }
`;

export const HeaderPageHolder = styled.div`
    margin: 0 auto;
    max-width: var(--l-container-width);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    padding: 0rem 0.9375rem;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`;

export const HeaderPageLinkBack = styled(NavLink)`
    display: flex;
    width: 2.1875rem;
    height: 2.1875rem;
    margin-right: 0.1875rem;
    
    & svg {
        font-size: 1.8rem;
        color: var(--c-primary);
        height: auto;
    }
`;

export const HeaderPageItem = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
        &:last-child {
          display: none;  
        }
    }
`;
