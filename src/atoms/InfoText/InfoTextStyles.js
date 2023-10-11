import styled from "styled-components";

export const InfoTextStyle = styled.div`
    display: flex;
    align-items: center;
    position: fixed;
    font-size: 0.875rem;
    left: 0rem;
    right: 0rem;
    z-index: 9999999;
    opacity: 1;
    visibility: visible;
    bottom: 0rem;
    transition: hidden 0.4s ease-in-out, opacity 0.4s ease-in-out, bottom 0.4s ease-in-out;
    background-color: var(--c-success);
    color: var(--c-grey-100);
    padding: 20px 20px;

    & svg {
        font-size: 1.5rem;
        color: var(--c-grey-100);
        margin-right: 0.5rem;
    }


    @media (min-width: 768px) {
        font-size: 1rem;

        & svg {
            font-size: 1.8rem;
        }
    }
`;