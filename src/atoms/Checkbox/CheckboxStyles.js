import { styled } from "styled-components";

export const CheckboxStyle = styled.label`
    display: flex;
    align-items: center;
    position: relative;
    padding-left: 1.875rem;
    font-size: 0.875rem;
    line-height: 1.5;
    color: var(--c-grey-100);
    font-weight: var(--f-normal);
    user-select: none;
    cursor: pointer;

    & span::after {
        content: "";
        position: absolute;
        display: none;
    }

    & input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;

        &:checked {
            & ~ span::after {
                display: block;
            }
        }
    }

    & span {
        position: absolute;
        top: 0;
        left: 0;
        height: 1.25rem;
        width: 1.25rem;
        border: 0.0625rem solid var(--c-grey-30);
        background-color: var(--c-grey-0);
        transition: background-color .25s ease;

        &:after {
            content: "";
            position: absolute;
            left: 0.375rem;
            width: 0.4375rem;
            height: 0.8125rem;
            border: solid var(--c-primary);
            border-width: 0 2px 2px 0;
            transform: rotate(45deg);
        }
    }

    &:hover {
        & input ~ span {
            background-color: var(--c-grey-10);
            transition: all 0.4s ease;
        }
    }
`;