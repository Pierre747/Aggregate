import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useIsUserConnected } from '../UserProvider/UserProvider';
import GuestLayout from '../GuestLayout/GuestLayout';

/**
 * Ce composant sert à rediriger l'utilisateur vers la page home
 * si il essaye d'accéder à une route reservé aux utilisateurs non connectés
 */
export default function GuestRoute() {
	const isUserConnected = useIsUserConnected();

	if (isUserConnected) {
		console.log('You must be logged out to access this page');

		return <Navigate to='/' />;
	}

	return (
		<GuestLayout>
			<Outlet />
		</GuestLayout>
	);
}
