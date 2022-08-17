import React, { useState, createContext } from 'react';
import Header from '../Header/Header';
import Leftmenu from '../Leftmenu/Leftmenu';

import './layout.css';

export const ThemeContext = createContext(null);

export default function AuthenticatedLayout(props) {
	const [theme, setTheme] = useState('light');

	const toggleTheme = () => {
		setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
	};
	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<div className='logged_app' id={theme}>
				<Header />
				<div className='main'>
					<Leftmenu />
					{props.children}
				</div>
			</div>
		</ThemeContext.Provider>
	);
}
