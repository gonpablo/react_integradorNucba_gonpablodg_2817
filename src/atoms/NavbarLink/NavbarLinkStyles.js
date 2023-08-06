import { styled } from "styled-components";


export const NavbarLinkStyle = styled.li`
    list-style: none;

    &.--dropdown {
        display: flex;
        align-items: center;
        position: relative;
        height: 100%;
    }

    & a {
        display: inline-flex;
        align-items: center;
        font-size: 1.125rem;
        color: var(--c-grey-100);
        font-weight: var(--f-medium);
        padding: 0.625rem 0.9375rem;
        border-radius: 0.5rem;
        border: 1px solid var(--c-grey-000);
        transition: background-color 0.4s ease-in-out;

        &:hover {
            background-color: var(--c-grey-5);
        }
    }

    @media (min-width: 768px) {
        & a {
          font-size: 1rem;
        }
    }
`;

export const NavbarLinkStyleFeatured = styled(NavbarLinkStyle)`
    & a {
        border: 1px solid var(--c-primary-medium);
        color: var(--c-primary-medium);
    }
`;