import { useState, useEffect } from 'react';
import * as S from './GlobalStyles';
import Router from './components/routes/Router';
import * as themes from './components/Themes';
import Context from './components/context';
import { ThemeProvider } from 'styled-components';
import useLocalStorage from './hooks/useLocalStorage';

export default function App() {
	const [state, setState] = useLocalStorage('theme', {
		theme: themes.dark
	});
	const [show, setShow] = useState(true);

	useEffect(() => {
		let oldValue = 0;
		let newValue = 0;

		document.getElementById('body').addEventListener('scroll', function (e) {
			// Get the new Value
			newValue = document.getElementById('body').scrollTop;

			//Subtract the two and conclude
			if (oldValue - newValue < 0) {
				setShow(false);
			} else if (oldValue - newValue > 0) {
				setShow(true);
			}

			// Update the old value
			oldValue = newValue;
		});
	}, []);

	function toggleTheme() {
		setState({
			theme: state.theme === themes.dark ? themes.light : themes.dark
		});
		console.log(state.theme);
	}

	return (
		<Context.Provider value={state.theme}>
			<Context.Consumer>
				{(theme) => (
					<ThemeProvider theme={theme}>
						<S.Body id="body">
							<Router toggleTheme={toggleTheme} show={show} />
							<S.GlobalStyles />
						</S.Body>
					</ThemeProvider>
				)}
			</Context.Consumer>
		</Context.Provider>
	);
}
