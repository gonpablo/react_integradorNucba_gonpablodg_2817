import { styled } from "styled-components";


export const HeroStyle = styled.section`
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 1;
    overflow: hidden;
    width: 100%;
    height: 16.25rem;
    max-width: var(--l-container-width);
    margin: 0 auto;
    border-radius: 0 0 1.25rem 1.25rem;

    &::after {
      content: '';
      bottom: 0;
      right: 0;
      z-index: 1;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent 0%, rgba(0, 0, 0, 0.45) 50%, transparent 100%);
    }


    @media (min-width: 768px) {
      width: 100%;
      height: auto;
      height: 26.25rem;
    }

    @media (min-width: 992px) {
      border-radius: 1.125rem;
    }

    @media (min-width: 1024px) {
      height: 31.25rem;
    }
`; 

export const HeroSlider = styled.div`
    background-position: center center;
    background-size: cover;
    height: 100%;
    width: 100%;
`; 


export const HeroHolder = styled.div`
  position: absolute;
  z-index: 10;
  padding: 0rem 0.9375rem;
  max-width: var(--l-container-width);
  text-align: center;
  margin: 0 auto;

  & h1 {
    font-size: 1.75rem;
    font-weight: var(--f-bold);
    color: var(--c-grey-100);
    line-height: 1.1;
    margin-bottom: 0.625rem;
    text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.55);
  }

  & p {
    font-size: 0.9375rem;
    font-weight: var(--f-regular);
    color: var(--c-grey-100);
    line-height: 1.1;
    margin-bottom: 1.875rem;
    text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.55);
  }

  & button {
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    & h1 {
      font-size: 3.125rem;
    }

    & p {
      font-size: 1.375rem;
      margin-bottom: 2.5rem;
    }
  }
`;

