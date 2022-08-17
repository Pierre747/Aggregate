import React from 'react';
import './App.css';
import UserProvider from './components/UserProvider/UserProvider';
import ArticlesProvider from './components/ArticlesProvider/ArticlesProvider';
import Router from './components/Router/Router';
import SearchProvider from './components/SearchProvider/SearchProvider';

const App = () => {
	return (
		<UserProvider>
			<SearchProvider>
				<ArticlesProvider>
					<Router />
				</ArticlesProvider>
			</SearchProvider>
		</UserProvider>
	);
};

export default App;
