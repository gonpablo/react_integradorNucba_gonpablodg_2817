import { styled } from "styled-components";
import { NavLink } from 'react-router-dom';

export const BreadcrumbStyle = styled.ul`
    list-style: none;
    display: flex;

    & li {
        font-size: 0.875rem;
        color: var(--c-grey-100);
        font-weight: var(--f-regular);
        margin-right: 0.5rem;
        display: flex;
        align-items: center;

        & svg {
            font-size: 0.875rem;
            color: var(--c-grey-100);
            margin-right: 0.375rem;
        }

        &:after {
            margin-left: 0.5rem;
            content: ">";
        }

        &:last-child {
            margin-right: 0rem;
            font-weight: var(--f-bold);

            &:after {
                margin-left: 0rem;
                content: "";
            }
        }
    }
`;

export const BreadcrumbLink = styled(NavLink)`
    display: inline-flex;
    align-items: center;
`;


