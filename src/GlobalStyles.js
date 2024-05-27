import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        list-style:none;
        font-family: "Roboto", sans-serif;
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
