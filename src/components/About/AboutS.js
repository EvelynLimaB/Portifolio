import styled, { keyframes } from 'styled-components';
import ReactModal from 'react-modal';
import pontas from '../../Assets/pontas.png';
import circle from '../../Assets/circuloptd_.svg';

const appearAn = keyframes`
0% {opacity: 0.5;}
100% {opacity: 1;}
`;
const spin = keyframes`
0% {transform: rotate(0deg)}
100% {transform: rotate(-12deg)}
`;

export const Section = styled.section`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	min-height: 100vh;
	min-height: -webkit-fill-available; /* mobile viewport bug fix */
	overflow-x: hidden;
	scroll-behavior: smooth;

	@media screen and (orientation: landscape) {
	}
`;

export const Circle = styled.div`
	height: 85vw;
	width: 85vw;
	position: absolute;
	top: -40vw;
	right: -40vw;
	transform: scaleX(-1);
	filter: ${(props) => props.theme.convert1};
	background-image: url(${circle});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	animation: ${spin} 1s linear infinite;

	@media screen and (orientation: landscape) {
		height: 45vw;
		width: 45vw;
		position: absolute;
		top: -20vw;
		right: -15vw;
	}
`;

export const BgCut = styled.div`
	position: absolute;
	top: -80vw;
	width: 144.771vw;
	height: 88.349vw;
	z-index: -1;
	background-image: url(${pontas});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	filter: ${(props) => props.theme.convertbg};

	@media screen and (orientation: landscape) {
		transform: rotate(-10deg);
		width: 110%;
		top: -65vw;
	}
`;

export const Div = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
	min-height: 100vh;

	@media screen and (orientation: landscape) {
		min-height: 130vh;
	}
`;

export const Div1 = styled(Div)`
	min-height: 100vh;
	justify-content: center;
`;

export const Div2 = styled(Div)`
	position: relative;
	background: ${(props) => props.theme.aboutbg};
`;

export const H2 = styled.h2`
	position: relative;
	transform: rotate(-10deg);
	right: 20vw;
	bottom: 10vh;
	index: 1;
`;

export const Proramslng = styled.ul`
	width: 60%;
	height: 40vh;
	position: relative;
	right: 8vw;
	background: ${(props) => props.theme.background};
	border-radius: 50px;
	z-index: 1;
	border: solid ${(props) => props.theme.pallete2};
	-webkit-box-shadow: inset 0px 0px 24px -3px rgba(77, 124, 138, 1);
	box-shadow: inset 0px 0px 24px -3px rgba(77, 124, 138, 0.1);
	overflow: hidden;

	ul {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		overflow-y: scroll;
	}

	@media screen and (orientation: landscape) {
		ul {
			flex-direction: row;
			overflow-y: hidden;
			overflow-x: scroll;
		}
	}
`;

export const Li = styled.li`
	width: 90%;
	padding: 5px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	transition: ease-in 0.1s;
	cursor: pointer;

	img {
		height: 20vw;
		filter: ${(props) => props.theme.convert2}
			drop-shadow(8px 10px 3px rgba(0, 0, 0, 0.3));
	}
	&:hover {
		transform: scale(1.05);
	}

	@media screen and (orientation: landscape) {
		flex-direction: column;
		img {
			height: 10vw;
		}
	}
`;

// Modal styles
export const Button = styled.button`
	background: none;
	position: absolute;
	top: 10px;
	right: 10px;
	z-index: 100;
	img {
		width: 50px;
		filter: ${(props) => props.theme.convertw};
		opacity: 0.5;
	}
`;

export const Modal = styled(ReactModal)`
	background: ${(props) => props.theme.background};
	display: flex;
	flex-direction: column;
	align-items: center;
	color: ${(props) => props.theme.color};
	section {
		width: 100%;
		height: 100%;
		display: grid;
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		grid-template-rows: repeat(6, 1fr);
		grid-column-gap: 1em;
		grid-row-gap: 1em;
		justify-items: center;
	}
	@media screen and (orientation: landscape) {
		left: 0;
		right: 0;
		margin: 0 auto;
		width: 70vw;
	}
`;

export const Icon = styled.img`
	grid-area: 1 / 1 / 3 / 3;
	align-self: center;
	max-width: 100%;
	max-height: 100%;
	filter: ${(props) => props.theme.convert1};
`;

export const Nome = styled.h2`
	display: flex;
	grid-area: 1 / 3 / 3 / 7;
	font-size: 2.5em;
	width: 100%;
	height: 100%;
	align-items: center;
	justify-content: center;
	@media screen and (orientation: landscape) {
		font-size: 4.5rem;
		grid-area: 1 / 3 / 3 / 6;
	}
`;

export const Desc = styled.p`
	grid-area: 3 / 1 / 6 / 7;
	font-size: 1.8rem;
	width: 100%;
	padding: 4%;
	text-align: center;
	@media screen and (orientation: landscape) {
		font-size: 3rem;
	}
`;

export const MStyle = {
	overlay: {
		backdropFilter: 'blur(20px)',
		backgroundColor: 'rgba(0, 0, 0, 0.1)'
	},
	content: {
		position: 'absolute',
		top: '40px',
		left: '40px',
		right: '40px',
		bottom: '40px',
		overflow: 'auto',
		WebkitOverflowScrolling: 'touch',
		borderRadius: '30px',
		padding: '20px'
	}
};
