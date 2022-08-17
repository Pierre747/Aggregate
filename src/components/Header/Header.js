import React, { useContext, useRef } from 'react';
import './Header.css';
import ReactSwitch from 'react-switch';
import logo from '../assets/pictures/logo1.png';
import avatar from '../assets/pictures/avatar.png';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import Snackbar from '../Snackbar/Snackbar';
import { UserContext } from '../UserProvider/UserProvider';
import { ThemeContext } from '../AuthenticatedLayout/AuthenticatedLayout';

export default function Header() {
	const SnackbarType = {
		success: 'success',
		fail: 'fail',
	};
	const snackbarRef = useRef(null);

	const { theme, toggleTheme } = useContext(ThemeContext);
	const { user, setUser } = useContext(UserContext);

	return (
		<section className='header'>
			<img src={logo} alt='logo' className='logo' />

			<h1
				className='header_title_main'
				alt='hearder title'
				rel='noreferrer'
				onClickURL='/'
			>
				Aggregate
			</h1>

			<div className='darkmode_toggle'>
				<span className='darkmode_toggle_light'>
					<LightbulbIcon className='light_icon' />
					Light
				</span>
				<ReactSwitch checked={theme === 'light'} onChange={toggleTheme} />
				<span className='darkmode_toggle_dark'>
					Dark
					<ModeNightIcon className='dark_icon' />
				</span>
			</div>

			<div className='snackbar'>
				<img src={avatar} alt='avatar' className='header_avatar' />
				<div className='header_user_credentials'>
					{user.email}
					{user.picture}
				</div>
				<button
					className='showSnackbarBttn'
					onClick={() => {
						setUser(false);
					}}
				>
					Log Out
				</button>
				<Snackbar
					ref={snackbarRef}
					message='User successfully disconnected !'
					type={SnackbarType.success}
				/>
			</div>
		
		</section>
	);
}
