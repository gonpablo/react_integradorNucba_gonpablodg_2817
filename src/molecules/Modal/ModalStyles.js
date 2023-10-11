import styled from 'styled-components';

export const ModalStyle = styled.div`
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
    opacity: 0;
    visibility: hidden;

    & div {
        display: flex;
        grid-gap: 10px;
        align-items: center;
    }

    &.--active {
        opacity: 1;
        visibility: visible;
    }
`;