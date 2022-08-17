import React, { useState, useEffect } from 'react';
import { FaAngleDoubleUp } from 'react-icons/fa';
import '../../Pages/style/Feed/feed.css';

const ScrollToTop = () => {
	const [showScrollTopButton, setShowScrollTopButton] = useState(false);

	useEffect(() => {
		const homeBlurElement = document.querySelector('.home_blur');
		homeBlurElement.addEventListener('scroll', () => {
			console.log(homeBlurElement.scrollTop);
			if (homeBlurElement.scrollTop > 1400) {
				setShowScrollTopButton(true);
			} else {
				setShowScrollTopButton(false);
			}
		});
	}, []);

	const scrollTop = () => {
		const homeBlurElement = document.querySelector('.home_blur');
		homeBlurElement.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};
	return (
		<FaAngleDoubleUp
			className={
				showScrollTopButton
					? 'top_btn_position top_btn_style open'
					: 'top_btn_position top_btn_style'
			}
			onClick={scrollTop}
		/>
	);
};

export default ScrollToTop;
