import React, { useState, useContext } from 'react';

export const UserContext = React.createContext({});

export const useIsUserConnected = () => {
	//! Hook à utiliser pour donner des droits à un user
	const { user } = useContext(UserContext);
	return user !== false;
};

export default function UserProvider(props) {
	const [user, setUser] = useState(false);

	console.log(user);

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{props.children}
		</UserContext.Provider>
	);
}
