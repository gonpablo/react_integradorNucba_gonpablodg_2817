import { styled } from "styled-components";



export const ButtonStyle = styled.button`
    font-size: 1rem;
    height: 2.8125rem;
    padding: 0rem 1.5625rem;
    display: flex;
    width: fit-content;
    border-radius: 0.3125rem;
    font-weight: var(--f-medium);
    align-items: center;
    justify-content: center;
    grid-gap: 0.375rem;
    transition: background-color 0.3s ease-in-out, opacity 0.3s ease-in-out;

    & svg {
        font-size: 1.2rem;
        vertical-align: center;
    }

    & span {
        display: none;
    }

    &.primary {
        background-color: var(--c-primary);
        color: var(--c-grey-100);

        &:hover {
            background-color: var(--c-primary-hover);
        }
    }
`;


export const ButtonUltraSmall = styled(ButtonStyle)`
    font-size: 0.8125rem;
    height: 1.875rem;
    padding: 0rem 0.9375rem;

    & svg {
        font-size: 0.95rem;
    }

`;

export const ButtonSmall = styled(ButtonStyle)`
    font-size: 0.875rem;
    height: 2.1875rem;

    & svg {
        font-size: 1rem;
    }
`;


export const ButtonBig = styled(ButtonStyle)`
    font-size: 1.0625rem;
    height: 3.125rem;

    & svg {
        font-size: 1.2rem;
    }
`;

export const ButtonUltraBig = styled(ButtonStyle)`
    font-size: 1.25rem;
    height: 3.625rem;

    & svg {
        font-size: 1.45rem;
    }
`;
