import { styled } from "styled-components";

export const MenuCartStyle = styled.div`
    position: fixed;
    right: 0rem;
    top: 0rem;
    height: 100vh;
    bottom: 0rem;
    max-height: none;
    width: 30rem;
    transform: translate(900px, 0px);
    display: flex;
    flex-direction: row;
    z-index: 999999;
    transition: margin-top 0.3s ease-in-out, opacity 0.3s ease-in-out, transform 0.3s ease-in-out;

    &.--active {
        visibility: visible;
        opacity: 1;
        transform: translate(0px, 0px);
    }

    @media (max-width: 768px) {
        left: 0rem;
        width: 100%;
    }
`;

export const MenuCartContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.875rem;
    flex: 1;
    min-width: 12.5rem;
    width: max-content;
    background-color: var(--c-grey-0);

    @media (max-width: 768px) {
        padding: 1.5rem 1rem;
    }
`;

export const MenuCartTop = styled.div`
    margin-bottom: 1.875rem;
    display: flex;
    align-items: center;

    & svg {
        cursor: pointer;
        font-size: 1.5rem;
        margin-right: 0.6rem;
        vertical-align: middle;
    }

    @media (min-width: 768px) {
        & svg {
            font-size: 1.8rem;
        }
    }
`;


export const MenuCartContent = styled.div`
    flex: 1;
    overflow: auto;
    /*padding-right: 0.8rem;*/

    &::-webkit-scrollbar {
        width: 0.5rem;
        height: 0.5rem;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 0.3125rem;
    }

    &::-webkit-scrollbar-track {
        border-radius: 0.3125rem;
    }

    &::-webkit-scrollbar-thumb {
        background: var(--c-grey-30);
        border-radius: 0.3125rem;
    }

    &::-webkit-scrollbar-track {
        background: var(--c-grey-10);
        border-radius: 0.3125rem;
    }
`;

export const MenuCartContentItem = styled.div`
    margin-bottom: 0.95rem;

    &:last-child {
        margin-bottom: 0rem;
    }
`;



export const MenuCartBottom = styled.div`
    margin: 0.75rem 0rem 0rem 0rem;
`;


export const MenuCartBottomTotal = styled.span`
    padding: 1.25rem 0rem 0rem 0rem;
    border-top: 0.0625rem solid var(--c-grey-10);
    display: flex;
    align-items: center;
    justify-content: space-between;

    & p {
        font-size: 1.0625rem;

        & span {
            color: var(--c-grey-60);
            font-weight: var(--f-regular);
        }

        @media (min-width: 768px) {
            font-size: 1.125rem;
        }
    }

    & strong {
        font-size: 1.0625rem;
        font-weight: var(--f-bold);

        @media (min-width: 768px) {
            font-size: 1.125rem;
        }
    }
`;

export const MenuCartBottomButtons = styled.span`
    display: flex;
    align-items: center;
    flex-direction: column-reverse;
    grid-row-gap: 0.6rem;
    margin-top: 1.5625rem;

    & button {
        width: 100%;
    }

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;

        & button {
            width: auto;
        }
    }
`;

export const MenuCartOverlay = styled.div`
    content: '';
    position: fixed;
    visibility: hidden;
    background: var(--o-overlay-light);
    backdrop-filter: blur(5px);
    z-index: 99999;
    opacity: 0;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    transition: opacity 0.4s ease-out, visibility 0.4s ease-out;

    &.--active {
        visibility: visible;
        opacity: 1;
    }
`;

export const MenuCartModalAlert = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #212121e8;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    & div {
        display: flex;
        grid-gap: 10px;
        align-items: center;
    }
`;

export const MenuCartLoading = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: transparent;
    z-index: -1;

    &.--active {
        background-color: #000000c4;
        z-index: 10;

        &:before {
            width: 4.125rem;
            height: 4.125rem;
            border-radius: 50%;
            position: absolute;
            content: "";
            border: 0.4rem solid var(--c-grey-100);
            -webkit-clip-path: inset(0 0 50% 0);
            clip-path: inset(0 0 50% 0);
            transform: rotate(0);
            -webkit-animation: spin .6s linear infinite;
            animation: spin .6s linear infinite;
        }

    }

    

`;