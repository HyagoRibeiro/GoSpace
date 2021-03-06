import styled from 'styled-components';

export const ContainerFooter = styled.footer `
    position: relative;
    bottom: 0;
    height: 40px;
    width: 100%;
    color: #fff;
    @media(max-width: 480px) {
        color:#000;
        background-color: #fff;
        height: 5vh;
        display:flex;
        justify-content: center;
        align-items: center;
    }
`;

export const TextFooter = styled.p `
    text-align: center;
    font-size: 14px;
`;