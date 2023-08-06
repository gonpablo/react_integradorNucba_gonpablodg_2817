import { styled } from "styled-components";


export const CopyrightStyle = styled.div`
    background-color: var(--c-grey-5);
    padding: 1.125rem 0.9375rem 3.4375rem 0.9375rem;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    position: relative;
`;

export const CopyrightItem = styled.div`
    display: flex;
    align-items: center;
`;

export const CopyrightText = styled.p`
    font-size: 0.8125rem;
    color: var(--c-grey-100);
    margin-right: 0.5rem;
    font-weight: var(--f-medium);
    line-height: 1;

    & svg {
        font-size: 1rem;
        vertical-align: sub;
    }

    & a {
        line-height: 1;
    }

    & img {
        vertical-align: sub;
        margin-left: 0.375rem;
        transform: translate(0px, -1px);
    }
`;


