import styled, { keyframes } from 'styled-components';

const up = keyframes`
  0% {opacity: 0;   transform: scaleY(0); transform: translateY(1vw);}
  100% {opacity: 1;   transform: scaleY(1);}
`;

export const Bar = styled.header`
  position: absolute;
  bottom: 0;
  background-color: ${(props) => props.theme.pallete1};
  width: 100%;
  height: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  color: #2f3235;
  border-radius: 10vw 10vw 0 0;
  z-index: 100;
  animation: ${up} 0.5s;

  nav {
    width: 100%;
    height: max-content;
  }
`;

export const Links = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Linv = styled.li`
  padding: 1%;
  background-color: rgba(250, 0, 0, 0.1);
  border-radius: 3vw;
  a {
    color: #332d2e;
    text-decoration: none;
    font-weight: 550;
  }
`;

export const Div = styled.div`
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: auto;
`;
