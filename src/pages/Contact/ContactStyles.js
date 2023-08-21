import { styled } from "styled-components";

export const ContactInfo = styled.ul`
    display: flex;
    flex-direction: column;

    & li {
        font-size: 0.9375rem;
        color: var(--c-grey-80);
        margin-bottom: 0.65rem;
        font-weight: var(--f-medium);

        &:last-child {
            margin-bottom: 0rem;
        }

        & svg {
            margin-right: 0.5rem;
            vertical-align: middle;
            font-size: 1rem;
        }
    }
`;

export const ContactFormContainer = styled.form`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 0.9375rem;
    grid-column-gap: 0.625rem;
    width: 100%;

    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 1.25rem;
        grid-column-gap: 0.75rem;
    }
`;

export const ContactSocial = styled.div`
    display: flex;
`;