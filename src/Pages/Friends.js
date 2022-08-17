import React, { useState, useContext } from 'react';
import './style/Friends/friends.css';
import './style/logo.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import users from '../components/assets/data/myFriends';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import { SearchContext } from '../components/SearchProvider/SearchProvider';

export default function Friends() {
	const [isFriend, setIsFriend] = useState(false);
	const [friendsId, setFriendsId] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

	const { searchTerms } = useContext(SearchContext);

	const friendHandler = () => {
		setIsFriend(!isFriend);
	};

	const removeFriend = (friendToRemoveId) => {
		setFriendsId(
			friendsId.filter((friendId) => {
				// Je garde l'ami seulement si son id n'est pas celui de l'ami que je dois supprimer
				return friendToRemoveId !== friendId;
			})
		);
	};

	const filteredFriends = users.filter((user) => {
		// Est-ce que la description/contenu ou username correspondent au terme recherché ?
		const descriptionMatches = user.desc.toLowerCase().includes(searchTerms);
		const contentMatches = user.content.toLowerCase().includes(searchTerms);
		const usernameMatches = user.username.toLowerCase().includes(searchTerms);

		const isFriend = friendsId.includes(user.id);

		return (
			isFriend && (descriptionMatches || contentMatches || usernameMatches)
		);
	});
	return (
		<>
			<div className='container_friends'>
				{filteredFriends.map((user) => {
					return (
						<Card
							key={user.id}
							className='friend_card'
							onClick={friendHandler}
							sx={{ maxWidth: 345 }}
						>
							<CardActionArea>
								<CardMedia
									component='img'
									height='140'
									image={user.profilePicture}
									alt='green iguana'
								/>
								<CardContent>
									<Typography gutterBottom variant='h5' component='div'>
										{user.username}
										<PersonRemoveIcon
											className='friendTag'
											onClick={() => removeFriend(user.id)}
										/>
									</Typography>
									<Typography variant='body2' color='text.secondary'>
										{user.desc}
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					);
				})}
			</div>
		</>
	);
}
