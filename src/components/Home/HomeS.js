import styled, { keyframes } from 'styled-components';

const appearAn = keyframes`
0% {opacity: 0; margin-bottom: -50px;}
100% {opacity: 1; margin-bottom: 0;}
`;

export const Section = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	min-height: 99vh;
	min-height: -webkit-fill-available; /* mobile viewport bug fix */
	overflow-x: hidden;
	scroll-behavior: smooth;

	@media screen and (orientation: landscape) {
		flex-direction: row;
	}
`;

export const Opndiv = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	@media screen and (orientation: landscape) {
		width: 50%;
		height: 95vh;
	}
`;

export const Picdiv = styled.div`
	width: 100%;
	height: 90%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Pfpic = styled.img`
	width: 40%;
	height: auto;
	animation-name: ${appearAn};
	animation-duration: 2s;
	animation-iteration-count: initial;

	filter: drop-shadow(5px -5px 6px rgba(0, 0, 0, 0.5));
	z-index: 0;
`;

export const Intro = styled.div`
	width: 50%;
	height: 10%;
	margin-top: -1vh;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50px;
	background-color: ${(props) => props.theme.pallete2};
	color: black;
	z-index: 1;
	-webkit-box-shadow: inset 0px 0px 24px -3px rgba(77, 124, 138, 0.5),
		-5px 9px 21px 4px rgba(0, 0, 0, 0.5);
	box-shadow: inset 0px 0px 24px -3px rgba(77, 124, 138, 0.35),
		-5px 9px 21px 4px rgba(0, 0, 0, 0.5);
	overflow: hidden;

	img {
		width: 250%;
	}
`;

export const Arrow = styled.img`
	position: absolute;
	bottom: 10%;
	width: 20%;
	@media screen and (orientation: landscape) {
		display: none;
	}
`;

export const Infodiv = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	@media screen and (orientation: landscape) {
		width: 50%;
		height: 95vh;
	}
`;

export const About = styled.div`
	width: 80%;
	height: 40%;
	padding: 5%;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	border-radius: 50px;
	border: solid ${(props) => props.theme.pallete2};
	-webkit-box-shadow: inset 0px 0px 24px -3px rgba(77, 124, 138, 0.5),
		-5px 9px 21px 4px rgba(0, 0, 0, 0.5);
	box-shadow: inset 0px 0px 24px -3px rgba(77, 124, 138, 0.35),
		-5px 9px 21px 4px rgba(0, 0, 0, 0.5);
	overflow-y: auto;
	p {
		display: flex;
		justify-content: center;
		width: 100%;
		max-height: 100%;
	}
`;

export const Icondiv = styled.ul`
	width: 70%;
	height: 40%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;

	@media screen and (orientation: landscape) {
		height: 10%;
		flex-direction: row;
	}
`;

export const Li = styled.li`
	width: 100%;
	height: auto;
	display: flex;

	a {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	img {
		width: 20%;
		filter: invert(89%) sepia(6%) saturate(1861%) hue-rotate(114deg)
			brightness(99%) contrast(100%) drop-shadow(6px 5px 11px #000);
	}
	p {
		padding: 1.5vw;
		border-radius: 50px;
		border: solid #9df7e5;
		-webkit-box-shadow: inset 0px 0px 24px -3px rgba(77, 124, 138, 0.5),
			-5px 9px 21px 4px rgba(0, 0, 0, 0.5);
		box-shadow: inset 0px 0px 24px -3px rgba(77, 124, 138, 0.35),
			-5px 9px 21px 4px rgba(0, 0, 0, 0.5);
	}
	@media screen and (orientation: landscape) {
		a {
			justify-content: center;
		}
		img {
			width: 40%;
		}
		p {
			display: none;
		}
	}
`;
