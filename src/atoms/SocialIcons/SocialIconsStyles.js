import { styled } from "styled-components";
import { NavLink } from 'react-router-dom';

export const SocialStyle = styled(NavLink)`
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => (props.color ? `var(--c-grey-100)` : `var(--c-grey-0)`)};
    border-radius: 50%;
    margin-right: 0.5rem;
    transition: all 0.4s ease;
    font-size: 0.9375rem;
    background-color: ${(props) => (props.color ? `${props.color}` : `var(--c-grey-50)`)}; ;


    &:hover {
        opacity: 0.75;
    }
`;


