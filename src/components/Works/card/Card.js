import React from 'react';
import styled, { keyframes } from 'styled-components';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

const appearAn = keyframes`
0% {opacity: 0; margin-bottom: -50px;}
100% {opacity: 1; margin-bottom: 0;}
`;

const cardWidth = 310;
const borderRadius = 10;
const transition = 'all 0.45s ease';

const Screenshot = styled.figure`
  z-index: 200;
  position: relative;
  margin: 0;
  padding: 0;
  width: ${cardWidth}px;
  max-width: 100%;
  height: 190px;
  border-radius: ${borderRadius}px ${borderRadius}px 0 0;
  overflow-x: hidden;
  overflow-y: hidden;
  backface-visibility: hidden;
  transition: ${transition};
  animation-name: ${appearAn};
  animation-duration: 1s;

  img {
    width: 100%;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0);
    transition: ${transition};
  }
`;

const Content = styled.div`
  z-index: 200;
  position: relative;
  padding: 20px 20px 30px;
  color: ${(props) => props.theme.color};
`;

const Title = styled.span`
  display: block;
  margin-bottom: 4px;
  font-size: 1.25em;
  font-weight: 500;
  transition: ${transition};
`;

const Description = styled.span`
  display: block;
  font-size: 0.875em;
  color: #999999;
  transition: ${transition};
  transition-delay: 0.04s;
`;

const BottomBar = styled.span`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 10px;
  background: ${(props) => props.background && props.background};
  border-radius: 0 0 ${borderRadius}px ${borderRadius}px;
  transition: ${transition};
`;

const Style = styled.button`
  position: relative;
  flex-shrink: 0;
  width: ${cardWidth}px;
  margin-top: 2vh;
  max-width: 80vw;
  text-align: left;
  background-color: transparent;
  border-radius: ${borderRadius + 3}px;
  cursor: pointer;
  border: solid ${(props) => props.theme.pallete2};
  -webkit-box-shadow: inset 0px 0px 24px -3px rgba(77, 124, 138, 0.5),
    -5px 9px 21px 4px rgba(0, 0, 0, 0.5);
  box-shadow: inset 0px 0px 24px -3px rgba(77, 124, 138, 0.35),
    -5px 9px 21px 4px rgba(0, 0, 0, 0.5);
  transition: ${transition};

  a{
    text-decoration: none;
  }

  &:hover {
    transform: scale(1.04);

    ${Title},
    ${Description},
    ${BottomBar} {
      transform: scale(0.92);
    }

    ${Title} {
      transform: translateY(-10px);
    }

    ${Description} {
      transform: translateY(-12px);
    }

    ${BottomBar} {
      border-radius: ${borderRadius - 2}px;
      transform: translateY(-14px) scale(0.9);
    }

    ${Screenshot} {
      transform: translateY(4px) scale(0.92);
      border-radius: ${borderRadius - 2}px;

      &::before {
        background: rgba(0, 0, 0, 0.1);
      }
    }
  }
`;

const Card = ({ hexa, title, description, image }) => (
  <Style>
    <Screenshot>
      <SimpleBar style={{ height: '105%' }}>
        <img src={image} />
      </SimpleBar>
    </Screenshot>
    <a href={description}>
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <BottomBar background={hexa} />
      </Content>
    </a>
  </Style>
);

export default Card;
