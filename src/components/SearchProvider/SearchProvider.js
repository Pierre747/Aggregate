import React, { useState } from 'react';

export const SearchContext = React.createContext({});

export default function SearchProvider(props) {
	const [searchTerms, _setSearchTerms] = useState('');

	const setSearchTerms = (searchTerm) => {
		_setSearchTerms(searchTerm.toLowerCase());
	};

	return (
		<SearchContext.Provider
			value={{
				searchTerms,
				setSearchTerms,
			}}
		>
			{props.children}
		</SearchContext.Provider>
	);
}
