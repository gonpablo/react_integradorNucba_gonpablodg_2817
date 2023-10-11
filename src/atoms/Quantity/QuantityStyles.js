import { styled } from "styled-components";

export const QuantityStyle = styled.div`
    display: flex;
    align-items: center;

    & input {
        height: 1.75rem;
        width: 2.4rem;
        padding: 0rem;
        background: transparent;
        color: var(--c-grey-100);
        border: none;
        font-size: 1rem;
        font-weight: var(--f-bold);
        text-align: center;
        -moz-appearance: textfield;
    }
`;


export const QuantityButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.15rem;
    font-weight: var(--f-bold);
    width: 1.7rem;
    height: 1.7rem;
    background-color:  ${(props) => (props.disabled ? "var(--c-grey-10)" : "var(--c-primary-hover)")};
    color: ${(props) => (props.disabled ? "var(--c-grey-60)" : "var(--c-primary-light)")};
    border-radius: 0.375rem;
    cursor: pointer;

    &:disabled {
        cursor: not-allowed;
    }

    @media (min-width: 768px) {
        font-size: 1.2rem;
    }
`;