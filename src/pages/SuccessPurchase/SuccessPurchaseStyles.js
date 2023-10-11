import { styled } from "styled-components";


export const SuccessPurchaseStyle = styled.div`
    position: relative;
 
`;


export const SuccessPurchaseHeader = styled.section`
    display: flex;
    align-items: center;
    position: relative;
    padding: 2.5rem 0rem 5.625rem 0rem;
    z-index: 0;
    background-color: var(--c-success);

    & svg {
        color: var(--c-grey-100);
        font-size: 2.8125rem;
        height: 2.8125rem;
        width: auto;

        @media (min-width: 768px) {
            font-size: 4.0625rem;
            height: 4.0625rem;
            width: auto;
        }
    }

    @media (min-width: 768px) {
        padding: 1.875rem 0rem 5.625rem 0rem;
        height: 20rem;
    }
`;

export const SuccessPurchaseHeaderHolder = styled.div`
    margin: 0 auto;
    max-width: var(--l-container-width);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    padding: 0rem 0.9375rem;

    & p {
        font-size: 1.125rem;
        line-height: 1.15;

        @media (min-width: 768px) {
            font-size: 1.25rem;
        }
    }
`;


export const SuccessPurchaseItem = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: var(--c-grey-0);
    padding: 1.375rem 1.125rem;
    border-radius: 0.75rem;
    box-shadow: var(--u-box-shadow-bottom);
    z-index: 1;
    max-width: 50rem;
    margin: 0 auto;
    text-align: center;

    & p {
        font-size: 0.95rem;
        font-weight: var(--f-regular);
        line-height: 1.35;

        @media (min-width: 768px){
            font-size: 1.1rem;
        }
    }

    @media (min-width: 768px) {
        padding: 1.875rem 1.5625rem;
    }
`;


