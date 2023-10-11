import { styled } from "styled-components";
import { css } from 'styled-components';

export const InputStyle = styled.div`
    position: relative;
    
    @media (min-width: 768px) {
        grid-column: ${(props) => (props.full ? "1 / span 2" : "")};
    }


    & label {
        display: inline-block;
        font-size: 0.8125rem;
        color: var(--c-grey-100);
        font-weight: var(--f-medium);
        position: absolute;
        top: 50%;
        transform: translate(0px, -50%);
        left: 1.125rem;
        transition: top 0.1s ease-in-out;
        pointer-events: none;

        &.--textarea {
            top: 1.875rem;
        }

        @media (min-width: 768px) {
            font-size: 0.9375rem;
        }
    }
`;


const stylesInputsTextareas = css`
    padding: 0.9375rem 1.125rem;
    border-radius: 0.3125rem;
    width: 100%;
    font-size: 0.8125rem;
    color: var(--c-grey-100);
    background-color: ${({isError}) => (isError ? "var(--c-error-bg)" : "var(--c-grey-0)")};
    border: 0.0625rem solid var(--c-grey-20);  
    border-color: ${({isError}) => (isError ? "var(--c-error-light)" : "var(--c-grey-20)")};
    transition: all ease-in-out .1s;



    &:focus {
        background-color: var(--c-grey-0);
        border-color: var(--c-primary-medium);
    }

    &:required:valid {
        border-color: var(--c-primary-medium);
        background-color: var(--c-grey-0);
    }

    &:required:disabled {
        border-color: var(--c-primary-medium);
        background-color: var(--c-grey-0);
    }

    &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 50px var(--c-grey-0) inset;
        -webkit-text-fill-color: var(--c-grey-100);
    }

    &:-webkit-autofill:focus {
        -webkit-box-shadow: 0 0 0 50px var(--c-grey-0) inset;
        -webkit-text-fill-color: var(--c-grey-100);
    }

    &:focus ~ label, &:valid ~ label {
        top: 0%;
        background-color: var(--c-grey-000);
        padding: 0rem 0.375rem;
        left: 0.75rem;
        color: var(--c-primary);
        font-size: 0.75rem;

        @media (min-width: 768px) {
            font-size: 0.875rem;
        } 
    }


    ${props => {
        if (props.isError) {
        return `
        & ~ label {
            top: 0%;
            background-color: var(--c-grey-000);
            padding: 0rem 0.375rem;
            left: 0.75rem;
            color: var(--c-primary);
            font-size: 0.75rem;

            @media (min-width: 768px) {
                font-size: 0.875rem;
            } 
        }
        `
        }
    }}

    @media (min-width: 768px) {
        font-size: 0.9375rem;
    }
`;


export const InputElement = styled.input`
    ${stylesInputsTextareas}
`;

export const TextAreaElement = styled.textarea`
    ${stylesInputsTextareas}
    height: 8.75rem;
    resize: none;
`;


export const InputTextError = styled.span`
    display: flex;
    align-items: center;
    font-size: 0.8125rem;
    font-weight: var(--f-medium);
    color: var(--c-error);
    margin-top: 0.375rem;

    & svg {
        margin-right: 0.3125rem;
        color: var(--c-error);
    }
`;

