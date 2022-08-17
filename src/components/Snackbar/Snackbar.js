import React, { useState, forwardRef, useImperativeHandle } from 'react';
import './Snackbar.css';
import { Route } from 'react-router-dom';
import Login from '../Login';

const Snackbar = forwardRef((props, ref) => {
	const [showSnackbar, setShowSnackbar] = useState(false);

	useImperativeHandle(ref, () => ({
		show() {
			setShowSnackbar(true);
			setTimeout(() => {
				setShowSnackbar(false);
			}, 3000);
		},
	}));
	return (
		<div
			className='snackbar'
			id={showSnackbar ? 'show' : 'hide'}
			onClick=<Route path='/login' element={<Login />} />
			style={{
				backgroundColor: props.type === 'success' ? '#00F593' : '#FF0033',
				color: props.type === 'success' ? 'black' : 'white',
			}}
		>
			<div className='symbol'>
				{props.type === 'success' ? <h1>&#x2713;</h1> : <h1>&#x2613;</h1>}
			</div>
			<div className='message'>{props.message}</div>
		</div>
	);
});

export default Snackbar;
