import styled, { css } from 'styled-components';

export const ModalStyle = styled.div`
    visibility: hidden;
    opacity: 0;
    display: flex;
    position: fixed;
    top: 0rem;
    left: 0rem;
    width: 100%;
    height: 100%;
    z-index: -1;
    align-items: center;
    transition: all 0.4s ease-out;
    justify-content: center;

    &:after {
        content: '';
        position: fixed;
        width: 100%;
        height: 100%;
        background: var(--o-overlay);
        z-index: 999999;
        top: 0;
        left: 0;
        right: 0;
        transition: opacity 0.4s ease-out, visibility 0.4s ease-out;
    }

    ${({ disabled }) =>
    disabled &&
    css`
        visibility: visible;
        opacity: 1;
        z-index: 9999999;
    `}
`;

export const ModalInner = styled.div`
    position: absolute;
    padding: 2.1875rem 0.9375rem;
    width: 95%;
    border-radius: 0.625rem;
    background-color: var(--c-grey-000);
    border: 0.0625rem solid var(--c-grey-10);
    z-index: 9999999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: opacity 0.3s ease-out, margin 0.3s ease-out;
    opacity: 0;
    margin-top: -1.875rem;
    top: 50%;
    transform: translate(0px, -100%);

    @media (min-width: 768px) {
        padding: 2.8125rem 1.5625rem;
        width: 40.625rem;
    }

    & svg {
        cursor: pointer;
        position: absolute;
        color: var(--c-grey-80);
        font-size: 1.875rem;
        top: 0.625rem;
        right: 0.625rem;
    }

    ${({ disabled }) =>
    disabled &&
    css`
        opacity: 1;
        margin: 0rem;
    `}
`;

export const ModalBotton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    grid-gap: 15px;
`;