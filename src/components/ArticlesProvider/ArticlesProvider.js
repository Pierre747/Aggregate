import React, { useState } from 'react';
import initialArticles from '../assets/data/dummyData';

export const ArticlesContext = React.createContext({});

export default function ArticlesProvider(props) {
	const [articles, setArticles] = useState(initialArticles);
	// console.log('test article :', initialArticles[0]);

	const createArticle = (article) => {
		setArticles([article, ...articles]);
	};

	const deleteArticle = (articleId) => {
		setArticles(articles.filter((article) => article.id !== articleId));
	};

	return (
		<ArticlesContext.Provider
			value={{
				articles,
				createArticle,
				deleteArticle,
			}}
		>
			{props.children}
		</ArticlesContext.Provider>
	);
}
