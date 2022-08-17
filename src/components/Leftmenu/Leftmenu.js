import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { SearchContext } from '../SearchProvider/SearchProvider';

//Import css
import './leftmenu.css';

export default function Leftmenu() {
	const { searchTerms, setSearchTerms } = useContext(SearchContext);

	return (
		<div className='form'>
			<form>
				<input
					className='form_search'
					type='search'
					placeholder='Search'
					value={searchTerms}
					onChange={(event) => {
						setSearchTerms(event.target.value);
					}}
				></input>
			</form>
			<NavLink to='/' className='form_profile' activeClassName='selected'>
				My Feed
			</NavLink>
			<NavLink
				to='/profile'
				className='form_profile'
				activeClassName='selected'
			>
				My profile
			</NavLink>
			<NavLink
				to='/friends'
				className='form_profile'
				activeClassName='selected'
			>
				My Friends
			</NavLink>
		</div>
	);
}
