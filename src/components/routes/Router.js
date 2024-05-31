import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import Home from '../Home/Home';
import Works from '../Works/Works';
import About from '../About/About';
import SnMn_up from '../../Assets/SnMn_up.png';
import SnMn from '../../Assets/SnMn.png';
import styled from 'styled-components';

const [isPressed, setIsPressed] = useState(false);
const [activeImg, setActiveImg] = useState(SnMn_up);
const RoutesS = styled(Routes)``;

const Theme = styled.button`
	position: fixed;
	top: 2%;
	left: 2vw;
	background: none;
	cursor: pointer;
	width: 15%;
	z-index: 100;

	img {
		width: 100%;
		filter: ${(props) => props.theme.convertw};
		opacity: 0.5;
	}
	@media screen and (orientation: landscape) {
		width: 5%;
	}
`;

export default function Router({ show, toggleTheme }) {
	const handleClick = () => {
		toggleTheme();
		setActiveImg((activeImage = SnMn_up ? SnMn : SnMn_up));
	};

	return (
		<BrowserRouter>
			<Theme
				value="Alternar entre tema escuro e claro"
				onMouseDown={() => handleClick()}
				onMouseUp={() => setIsPressed(false)}>
				<img src={activeImg} />
			</Theme>
			<RoutesS>
				<Route path="/" element={<Home />} />
				<Route path="/works" element={<Works />} />
				<Route path="/about" element={<About />} />
			</RoutesS>
			<Header rota="Home" rota2="Works" rota3="About" show={show} />
		</BrowserRouter>
	);
}
