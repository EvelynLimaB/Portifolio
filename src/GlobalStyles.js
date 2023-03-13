import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        list-style:none;
        font-family: 'Roboto';
    }
    a{
      color: ${(props) => props.theme.color};
    }
    button{
      border: none;
    }
    *::-webkit-scrollbar {
      width: 5px;
      height: 10px;
      background-color: ${(props) => props.theme.barbg};
    }
    *::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme.bar};
    }
    *::-webkit-scrollbar-corner {
      display: none;
    }
    .ReactModal__Overlay {
    opacity: 0.5;
    transition: 100ms ease-in-out;
  }

  .ReactModal__Overlay--after-open{
    opacity: 1;
  }

  .ReactModal__Overlay--before-close{
    opacity: 0.5;
  }
`;

export const Body = styled.div`
  position: fixed;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  transition: ease-in 0.5s;
`;
