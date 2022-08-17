import React, { useContext, useState } from 'react';
import './style/Feed/feed.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import { ArticlesContext } from '../components/ArticlesProvider/ArticlesProvider';
import FileInput from '../components/FileInput/FileInput';
import { v4 as uuidv4 } from 'uuid';
import { UserContext } from '../components/UserProvider/UserProvider';
import fileToBase64 from '../utils/fileToBase64';
import { SearchContext } from '../components/SearchProvider/SearchProvider';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';

export default function Feed() {
	// Context
	const { articles, createArticle } = useContext(ArticlesContext);
	const { user } = useContext(UserContext);
	const { searchTerms } = useContext(SearchContext);

	// State
	const [content, setContent] = useState('');
	const [description, setDescription] = useState('');
	const [selectedImage, setSelectedImage] = useState(null);

	const likeHandler = (event) => {
		console.log(event.target.closest('.container').getAttribute('data-id'));
		event.target.classList.toggle('likeIcon--liked');
	};

	const friendHandler = (event) => {
		console.log(event.target.closest('.container').getAttribute('data-id'));
		event.target.classList.toggle('addIcon--friend');
	};

	const filteredArticles = articles.filter((article) => {
		// Est-ce que la description/contenu ou username correspondent au terme recherché ?
		const descriptionMatches = article.desc.toLowerCase().includes(searchTerms);
		const contentMatches = article.content.toLowerCase().includes(searchTerms);
		const usernameMatches = article.username
			.toLowerCase()
			.includes(searchTerms);

		return descriptionMatches || contentMatches || usernameMatches;
	});

	const postNewArticle = async (event) => {
		event.preventDefault();

		let imageBase64 = null;

		if (selectedImage) {
			imageBase64 = await fileToBase64(selectedImage);
		}

		const newArticle = {
			id: uuidv4(),
			userId: user.id,
			username: `${user.firstname} ${user.name}`,
			profilePicture: user.profilePicture,
			desc: description,
			content: content,
			photo: imageBase64,
			date: 'Il y a quelques secondes',
			like: 0,
			comments: 0,
			isLiked: false,
			isFriend: false,
		};

		createArticle(newArticle);
	};

	return (
		<>
			<ScrollToTop />
			<div className='home'>
				<div className='home_blur'>
					<div className='user_post'>
						<div className='user_frame'>
							<form className='user_post_form' onSubmit={postNewArticle}>
								<input
									className='user_post_content'
									placeholder='Type your message'
									name='content'
									value={content}
									onChange={(event) => {
										setContent(event.target.value);
									}}
								></input>

								<p>or</p>

								<div className='picUploader'>
									<FileInput
										value={selectedImage}
										onChange={setSelectedImage}
									/>
								</div>

								<input
									className='user_post_description'
									placeholder='Type your image description'
									name='desc'
									value={description}
									onChange={(event) => {
										setDescription(event.target.value);
									}}
								></input>

								<button type='submit' className='user_post_form_submit_btn'>
									SEND
								</button>
							</form>
						</div>
					</div>
					{filteredArticles.map((article) => {
						return (
							<div key={article.id} data-id={article.id} className='container'>
								<div className='home_post'>
									<div className='homeTop'>
										<div className='home_user'>
											<p></p>
											<img
												className='profile_img'
												alt='profile pic'
												src={article.profilePicture}
											></img>
											<span className='profile_name'>{article.username}</span>
											<span className='post_date'>{article.date}</span>
										</div>
									</div>
									<div className='homeCenter'>
										{article.photo === null ? (
											<p></p>
										) : (
											<img
												className='postImg'
												src={article.photo}
												alt='userpic'
											></img>
										)}

										<div className='subtext'>
											<SubdirectoryArrowRightIcon />
											{article.photo ? (
												<p className='img_label'>{article.desc}</p>
											) : (
												<span className='post_without_pics'>
													{article.content}
												</span>
											)}
										</div>
										<span className='postText'>{article.description}</span>
									</div>
									<div className='home_buttons'>
										<div className='home_post_buttons'>
											<FavoriteIcon
												className={
													article.isLiked ? 'likeIcon--liked' : 'likeIcon'
												}
												onClick={(event) => likeHandler(event)}
											/>
											<span className='postLikeCounter'>{article.like}</span>
											<div className='comments'>
												<CommentIcon className='commentIcon' />
												<span className='commentCounter'>
													{article.comments}
												</span>
											</div>
											<PersonAddIcon
												className={
													article.isFriend ? 'addIcon--friend' : 'addIcon'
												}
												onClick={(event) => friendHandler(event)}
											/>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}
