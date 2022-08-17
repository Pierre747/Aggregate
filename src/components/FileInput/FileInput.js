import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import './fileinput.css';

const FileInput = (props) => {
	const [imageUrl, setImageUrl] = useState(null);

	useEffect(() => {
		if (props.value) {
			setImageUrl(URL.createObjectURL(props.value));
		}
	}, [props.value]);

	return (
		<>
			<div className='profile_pic'>
				{imageUrl && props.value && (
					<Box mt={2} textAlign='center'>
						<div></div>
						<img src={imageUrl} alt={props.value.name} height='100px' />
					</Box>
				)}
				<input
					accept='image/*'
					type='file'
					id='select-image'
					style={{ display: 'none' }}
					onChange={(e) => props.onChange(e.target.files[0])}
				/>
				<label className='upload_button' htmlFor='select-image'>
					<Button variant='contained' color='primary' component='span'>
						Upload Image
					</Button>
				</label>
			</div>
		</>
	);
};

export default FileInput;
