import React, { useState } from 'react';
import './style/Profile/profile.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import myprofile from '../components/assets/data/myprofile';
import SendIcon from '@mui/icons-material/Send';

export default function Profile() {
	const [firstname, setFirstname] = useState(myprofile.firstname);
	function handleFirstnameChange(value) {
		setFirstname(value);
	}
	const [name, setName] = useState(myprofile.name);
	function handleNameChange(value) {
		setName(value);
	}
	const [birthdateDay, setBirthdateDay] = useState(myprofile.birthdate.day);
	function handleBirthdateDayChange(value) {
		setBirthdateDay(value);
	}
	const [birthdateMonth, setBirthdateMonth] = useState(
		myprofile.birthdate.month
	);
	function handleBirthdateMonthChange(value) {
		setBirthdateMonth(value);
	}
	const [birthdateYear, setBirthdateYear] = useState(myprofile.birthdate.year);
	function handleBirthdateYearChange(value) {
		setBirthdateYear(value);
	}
	const [job, setJob] = useState(myprofile.job);
	function handleJobChange(value) {
		setJob(value);
	}
	const [description, setDescription] = useState(myprofile.description);
	function handleDescriptionChange(value) {
		setDescription(value);
	}
	const [gender, setGender] = useState(myprofile.gender);
	function handleGenderChange(value) {
		setGender(value);
	}
	const [address, setAddress] = useState(myprofile.address);
	function handleAddressChange(value) {
		setAddress(value);
	}
	return (
		<>
			<div className='profile'>
				<div className='my_profile'>
					<div className='left_profile'>
						<h2 className='customize'>Customize my profile ⬇️</h2>
						<section className='profile_left'>
							<div className='first_input'>
								<label className='label_top'>Firstname :</label>
								<input
									className='profile_firstname'
									type='text'
									placeholder='Firstname'
									value={firstname}
									onChange={(event) =>
										handleFirstnameChange(event.target.value)
									}
								></input>
							</div>
							<div className='second_input'>
								<label>Lastname :</label>
								<input //! Changement de côté : gauche
									className='profile_name'
									type='text'
									placeholder='Name'
									value={name}
									onChange={(event) => handleNameChange(event.target.value)}
								></input>
							</div>
							<div className='third_input'>
								<label>Birthdate :</label>
								<div className='profile_birthday'>
									<label className='profile_birthday_label'>(DD/MM/YYYY)</label>
									<input
										className='profile_birthday_day'
										type='number'
										placeholder='Day'
										min='01'
										max='31'
										value={birthdateDay}
										onChange={(event) =>
											handleBirthdateDayChange(event.target.value)
										}
									></input>
									<input
										className='profile_birthday_month'
										type='number'
										placeholder='Month'
										min='01'
										max='12'
										value={birthdateMonth}
										onChange={(event) =>
											handleBirthdateMonthChange(event.target.value)
										}
									></input>
									<input
										className='profile_birthday_year'
										type='number'
										placeholder='Year'
										min='1900'
										max='2020'
										value={birthdateYear}
										onChange={(event) =>
											handleBirthdateYearChange(event.target.value)
										}
									></input>
								</div>
							</div>
							<div className='fourth_input'>
								<label>Job :</label>
								<input
									className='profile_job'
									type='text'
									placeholder='My current job'
									value={job}
									onChange={(event) => handleJobChange(event.target.value)}
								></input>
							</div>
							<div className='fifth_input'>
								<label>Bio :</label>
								<textarea
									className='profile_description'
									type='text'
									placeholder='Add a bio'
									value={description}
									onChange={(event) =>
										handleDescriptionChange(event.target.value)
									}
								></textarea>
							</div>
							<div className='sixth_input'>
								<label>My Gender :</label>
								<select
									name='gender'
									className='profile_gender'
									defaultValue={gender}
									onChange={(event) => handleGenderChange(event.target.value)}
								>
									<option value='Man'>Man</option>
									<option value='Woman'>Woman</option>
								</select>
							</div>
							<div className='seventh_input'>
								<label>Address :</label>
								<input
									className='profile_address'
									type='text'
									placeholder='Town, State, Country'
									value={address}
									onChange={(event) => handleAddressChange(event.target.value)}
								></input>
							</div>
							<SendIcon className='profile_btn' type='submit'>
								Send
							</SendIcon>
						</section>
					</div>
					<Card
						key={myprofile.id}
						sx={{ maxWidth: 345 }}
						className='my_current_profile'
					>
						<CardActionArea>
							<CardMedia
								component='img'
								height='350'
								image={myprofile.profilePicture}
								alt='perso_profile'
							/>
							<CardContent>
								<Typography
									gutterBottom
									variant='h5'
									component='div'
									value={firstname + name}
									onChange={(event) => {
										setFirstname(event.target.value);
									}}
								>
									Name : {firstname + ' ' + name}
								</Typography>
								<Typography variant='body2' color='text.secondary'>
									Birthdate :
									{birthdateDay + '/' + birthdateMonth + '/' + birthdateYear}
								</Typography>
								<Typography variant='body2' color='text.secondary'>
									Gender : {gender}
								</Typography>
								<Typography variant='body2' color='text.secondary'>
									Job : {job}
								</Typography>
								<Typography variant='body2' color='text.secondary'>
									My bio : {description}
								</Typography>
								<Typography variant='body2' color='text.secondary'>
									Address : {address}
								</Typography>
							</CardContent>
						</CardActionArea>
					</Card>
					<div className='edit_my_profile'>
						<h2 className='access'>⬇️ Customize my access</h2>

						<section className='profile_right'>
							<form className='profile_user_credentials'>
								<input //! Changement de côté : droit
									className='profile_email'
									type='email'
									placeholder='Change my mail address'
								></input>
								<input
									className='profile_password'
									type='password'
									placeholder='New password'
								></input>
								<input
									className='profile_password_confirm'
									type='password'
									placeholder='Confirm new password'
								></input>
								<SendIcon className='profile_btn' type='submit' name='Send'>
									Send
								</SendIcon>
							</form>
						</section>
					</div>
				</div>
			</div>
		</>
	);
}
