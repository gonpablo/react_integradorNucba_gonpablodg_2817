import { styled } from "styled-components";


export const CardStyle = styled.div`
    background-color: var(--c-grey-0);
    border: 0.0625rem solid var(--c-grey-10);
    border-radius: 0.5rem;
    box-shadow: var(--u-box-shadow-light);
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    height: 100%;
    transition: box-shadow 0.4s ease-in-out;

    &:hover {
        box-shadow: var(--u-box-shadow-bottom);
    }

    &:hover img {
        transform: scale(1.06);
    }

    @media (min-width: 768px) {
        border-radius: 0.625rem;
    }
`;

export const CardImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10rem;
    overflow: hidden;
    position: relative;
    border-bottom: 0.0625rem solid var(--c-grey-10);
    background-color: var(--c-grey-100);

    & img {
        width: 100%;
        height: auto;
        transition: transform 0.4s ease-in-out;
    }

    @media (min-width: 640px) {
        height: 19.5rem;
    }

    @media (min-width: 768px) {
        height: 15rem;
    }

    @media (min-width: 992px) {
        height: 19rem;
    }

    @media (min-width: 1024px) {
        height: 15rem;
    }

    @media (min-width: 1266px) {
        height: 19.5rem;
    }
`;


export const CardInfoContainer = styled.div`
    position: relative;
    padding: 0.9375rem 0.75rem 0.9375rem 0.75rem;
    display: flex;
    flex-direction: column;
    flex: 1;

    & button {
        position: absolute;
        bottom: 0.65rem;
        right: 0.65rem;
    }

    @media (min-width: 768px) {
        padding: 1.375rem 1.25rem 1.375rem 1.25rem;

        & button {
            bottom: 1.25rem;
            right: 0.9375rem;
        }
    }
`;

export const CardInfoCategories = styled.p`
    font-size: 0.75rem;
    margin-bottom: 0.25rem;
    color: var(--c-grey-50);
    font-weight: var(--f-medium);

    @media (min-width: 768px) {
        font-size: 0.85rem;
        margin-bottom: 0.375rem;
    }
`;

export const CardInfoTitle = styled.p`
    font-size: 0.85rem;
    font-weight: var(--f-medium);
    margin-bottom: 1.5625rem;
    line-height: 1.2;
    flex: 1;

    @media (min-width: 768px) {
        font-size: 1rem;
    }
`;

export const CardInfoPrice = styled.div`

    & .--discount {
        font-size: 0.875rem;
        text-decoration: line-through;
        color: var(--c-grey-50);
        font-weight: var(--f-regular);
        margin-right: 0.5rem;
        margin-bottom: 0.08rem;
    }

    & .--normal {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        font-size: 1.06rem;
        color: var(--c-grey-100);
        font-weight: var(--f-bold);
        line-height: 1.15;
    }

    @media (min-width: 768px) {
        & .--discount {
            font-size: 1rem;
        }

        & .--normal {
            font-size: 1.25rem;
            flex-direction: row;
            align-items: center;
        }
    }
`;

export const CardInfoTag = styled.span`
    position: absolute;
    top: 0.6rem;
    left: 0.6rem;
    font-size: 0.62rem;
    display: block;
    font-weight: var(--f-medium);
    width: fit-content;
    border-radius: 0.3125rem;
    padding: 0.3125rem 0.5rem;
    line-height: 1;
    background-color: var(--c-featured);
    color: var(--c-grey-100);

    @media (min-width: 768px) {
        font-size: 0.75rem;
        top: 1rem;
        left: 1rem;
        padding: 0.375rem 0.625rem;
    }
`;

export const CardInfoTextOffert = styled.span`
    font-size: 0.7rem;
    line-height: 1.4;
    font-weight: var(--f-bold);
    color: var(--c-discount);
    margin-top: 0.25rem;

    @media (min-width: 768px) {
        font-size: 0.875rem;
        line-height: 1.45;
        margin-top: 0rem;
        margin-left: 0.5rem;
    }
`;