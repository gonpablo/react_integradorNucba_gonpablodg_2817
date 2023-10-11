import { styled } from "styled-components";


export const CardSmallStyle = styled.div`
    background-color: var(--c-grey-10);
    border: 0.0625rem solid var(--c-grey-10);
    border-radius: 0.5rem;
    padding: 0.5rem;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: row;

    @media (min-width: 768px) {
        padding: 0.7rem;
    }
`;


export const CardSmallImage = styled.figure`
    width: 5.625rem;
    height: 7.2rem;
    border: 0.0625rem solid var(--c-grey-20);
    border-radius: 0.375rem;
    background-size: cover;
    background-position: center center;

    @media (min-width: 768px) {
        width: 6.5625rem;
        height: 8.2rem;
    }
`;


export const CardSmallInfo = styled.div`
    padding-left: 0.9375rem;
    padding-top: 0.15rem;
    padding-bottom: 0.15rem;
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;

    @media (min-width: 768px) {
        padding-left: 1.25rem;
        padding-top: 0.2rem;
        padding-bottom: 0.2rem;
    }
`;

export const CardSmallBtnDelete = styled.button`
    & svg {
        position: absolute;
        cursor: pointer;
        right: 0rem;
        top: 0rem;
        font-size: 1.25rem;
    }
`;


export const CardSmallInfoTop = styled.div`
    flex: 1;
`;

/*
export const CardSmallInfoCategories = styled.p`
    font-size: 0.75rem;
    margin-bottom: 0.2rem;
    color: var(--c-grey-50);
    font-weight: var(--f-medium);

    @media (min-width: 768px) {
        font-size: 0.85rem;
        margin-bottom: 0.3rem;
    }
`;
*/

export const CardSmallInfoTitle = styled.p`
    font-size: 1rem;
    line-height: 1.15;
    width: 85%;

    @media (min-width: 768px) {
        font-size: 1.15rem;
    }
`;


export const CardSmallInfoBottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    flex-direction: column;
    margin-top: 0.3rem;

    @media (min-width: 768px) {
        align-items: flex-end;
        flex-direction: row;
    }
`;


export const CardSmallInfoPrice = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 0.7rem;

    & .--discount {
        display: none;
        font-size: 0.9rem;
        text-decoration: line-through;
        color: var(--c-grey-50);
        font-weight: var(--f-regular);
        margin-bottom: 0.2rem;

    }

    & .--normal {
        font-size: 1rem;
        color: var(--c-grey-100);
        font-weight: var(--f-bold);
        line-height: 1.15;

        & span {
            font-weight: var(--f-regular);
            margin-right: 0.3rem;
            color: var(--c-grey-60);
        }
    }

    @media (min-width: 768px) {
        margin-bottom: 0rem;

        & .--discount {
            display: block;
            font-size: 0.95rem;
        }

        & .--normal {
            font-size: 1.1rem;
        }
    }
`;
