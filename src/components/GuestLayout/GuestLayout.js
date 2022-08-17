import React from 'react';
import './guestLayout.css';

export default function GuestLayout(props) {
	return (
		<div className='App'>
			<h1 className='App_title_main'>
				<strong>Aggregate</strong>
			</h1>
			<h2 className='App_subtitle'>devs' favorite spot</h2>
			{props.children}
		</div>
	);
}
