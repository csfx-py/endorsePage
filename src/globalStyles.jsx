import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
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
    border-radius: 4px;
    background: ${({primary}) => (primary? '#264653' : '#F4A261')};
    white-space: nowrap;
    padding: ${({big}) => (big? '12px 64px' : '10px 20px')};
    color: #E76F51;
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;

    &:hover {
    transition: all 0.3s ease-out;
    background-color: ${({ primary }) => (primary ? '#F4A261' : '#264653')};
    color: #264653;
    }

    @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

export default GlobalStyle;