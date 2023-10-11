import { styled } from "styled-components";

export const SectionStyle = styled.section`
    padding: ${(props) => (props.topmargin ? "0rem 0rem 2.5rem 0rem;" : "2.5rem 0rem;")};
    margin-top: ${(props) => (props.topmargin ? "-3.125rem;" : "")};

    @media (min-width: 768px) {
      padding: ${(props) => (props.topmargin ? "0rem 0rem 4.375rem 0rem;" : "4.375rem 0rem;")};
    }
`;

export const Holder = styled.div`
    margin: 0 auto;
    max-width: var(--l-container-width);
    padding: 0rem 0.9375rem;
`;