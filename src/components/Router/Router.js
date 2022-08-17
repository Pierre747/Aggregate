/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//~ Components :

import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute';
import GuestRoute from '../GuestRoute/GuestRoute';
import Register from '../Register/Register';
import Login from '../Login';

//~ Pages :

import Feed from '../../Pages/Feed';
import Profile from '../../Pages/Profile';
import Friends from '../../Pages/Friends';
import NotFound from '../../Pages/NotFound';

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<GuestRoute />}>
					{/* Ici, les routes réservées aux utilisateurs pas connectés */}
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
					<Route path='*' element={<NotFound />} />
				</Route>

				<Route element={<AuthenticatedRoute />}>
					{/* Ici les routes réservées aux utilisateurs connectés */}
					<Route exact path='/' element={<Feed />} />
					<Route exact path='/profile' element={<Profile />} />
					<Route exact path='/friends' element={<Friends />} />
					<Route exact path='*' element={<NotFound />} />
				</Route>

				{/* Ici, les routes accessibles peu importe si on est connecté ou pas  */}
				{/* <Route ....... /> */}
			</Routes>
		</BrowserRouter>
	);
}
