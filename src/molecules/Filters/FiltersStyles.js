import { styled } from "styled-components";

export const FiltersStyle = styled.div`

    display: flex;
    flex-direction: column;
    position: fixed;
    width: 100%;
    z-index: 999999;
    left: 0;
    height: calc(100%);
    overflow: auto;
    opacity: 0;
    top: 56.25rem;
    transition: all .4s ease-out;
    visibility: hidden;
    background-color: var(--c-grey-000);


    @media (min-width: 1266px) {
        position: sticky;
        top: 11rem;
        padding: 0rem 1.5625rem 0rem 0rem;
        width: auto;
        z-index: 1;
        left: auto;
        overflow: auto;
        visibility: visible;
        opacity: 1;
        border-right: 0.0625rem solid var(--c-grey-10);
        max-height: calc(100vh - 125px);
    }
`;


export const FiltersContent = styled.div`
    padding: 0rem 1.25rem 1.5625rem 1.25rem;
    background-color: var(--c-grey-000);
    flex: 1;

    @media (min-width: 1024px) {
        padding: 0rem;
        flex: none;
    }
`;

export const FiltersItem = styled.fieldset`
    display: block;
`;


export const FiltersItemInner = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: all 0.4s ease;
    opacity: 1;
    margin-bottom: 0.75rem;
    padding-bottom: 1.5rem;
    border-bottom: 0.0625rem solid var(--c-grey-20);
    grid-row-gap: 0.75rem;

    &:last-child {
        margin-bottom: 0rem;
    }

`;



export const FiltersItemTitle = styled.legend`
    font-size: 1rem;
    font-weight: var(--f-bold);
    color: var(--c-grey-100);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 0rem;
`;

export const FiltersBottom = styled.div`
    display: flex;
    justify-content: center;
    padding: 0.9375rem 1.25rem;
    border-top: 0.0625rem solid var(--c-grey-20);
    background-color: var(--c-grey-000);
    position: sticky;
    bottom: 0;

    @media (min-width: 1024px) {
        position: relative;
        bottom: auto;
        border-top: none;
        padding: 1.25rem 1.25rem;
    }
`;