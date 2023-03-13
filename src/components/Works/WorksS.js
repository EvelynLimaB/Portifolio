import styled from 'styled-components';

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  min-height: -webkit-fill-available; /* mobile viewport bug fix */
  scroll-behavior: smooth;
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 5vh;
  width: 90%;
  z-index: 0;

  @media screen and (orientation: landscape) {
    flex-direction: row;
  }
`;
