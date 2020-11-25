import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    scroll-behavior: smooth;
}
`;

export const Container = styled.div`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
`;

export const Button = styled.button`
    border-radius: 25px;
    background: ${({primary}) => (primary? '#E76F51' : '#F4A261')};
    white-space: nowrap;
    padding: ${({big}) => (big? '12px 64px' : '10px 20px')};
    color: #264653;
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: 2px solid #264653;
    cursor: pointer;

    &:hover {
    transition: all 0.2s ease-out;
    background: ${({primary}) => (primary? '#F4A261' : '#E76F51')};
    border: 2px solid transparent;
    }

    @media screen and (max-width: 767px) {
    width: 100%;
    border: none;

    &:hover {
        transition: all 0.2s ease-out;
        border: none;
    }
  }
`;

export default GlobalStyle;