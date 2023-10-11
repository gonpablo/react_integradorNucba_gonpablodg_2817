import styled from "styled-components";

export const AlertStyle = styled.div`
    display: flex;
    align-items: center;
    padding: 0.625rem 0.75rem;
    border: 0.0625rem solid var(--c-primary);
    color: var(--c-grey-100);
    background-color: var(--c-primary-hover);
    font-size: 0.875rem;
    font-weight: var(--f-medium);
    border-radius: 0.375rem;
    grid-column: 1 /span 2;

    & svg {
        font-size: 1.5rem;
        color: var(--c-grey-100);
        margin-right: 0.5rem;
    }

    @media (min-width: 768px) {
        padding: 0.9375rem 1.125rem;
        font-size: 0.9375rem;
    }

`;