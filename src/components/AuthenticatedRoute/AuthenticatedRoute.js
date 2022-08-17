import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthenticatedLayout from '../AuthenticatedLayout/AuthenticatedLayout';
import { useIsUserConnected } from '../UserProvider/UserProvider';

/**
 * Ce composant sert à rediriger l'utilisateur vers la page de connexion
 * si il essaye d'accéder à une route necessitant d'être connecté
 */
export default function ProtectedRoute() {
	const isUserConnected = useIsUserConnected();

	if (!isUserConnected) {
		console.log('Sorry, you must be logged to access this part');

		return <Navigate to='/login' />;
	}

	return (
		<AuthenticatedLayout>
			<Outlet />
		</AuthenticatedLayout>
	);
}
