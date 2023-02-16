import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

import Swiper, { Navigation, Pagination, Parallax } from 'swiper';
// ------Swiper-------
Swiper.use([Navigation, Pagination, Parallax]);

if (document.querySelector('.slider-innovation__body')) {
	new Swiper('.slider-innovation__body', {
		observer: true,
		observeParents: true,
		slidesPerView: 4,
		spaceBetween: 30,
		watchOverflow: true,
		speed: 800,
		loop: true,
		loopAdditionalSlides: 8,
		preloadImage: false,
		// parallax: true,
		navigation: {
			nextEl: '.slider-innovation .slider-arrow--next',
			prevEl: '.slider-innovation .slider-arrow--prev',
		},
		breakpoints: {
			279: {
				slidesPerView: 1,
				spaceBetween: 15,
			},
			520: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			1100: {
				slidesPerView: 4,
				spaceBetween: 30,
			},
		}
	});
}
// ------Swiper-End-------

window.onload = function () {
	document.addEventListener('click', documentActions);

	//------Действия-при-кликах------
	function documentActions(e) {
		const targetElement = e.target;


		// Если кликнули на бургер
		if (targetElement.classList.contains('burger') || targetElement.closest('.burger')) {

			const elem = targetElement.classList.contains('burger') ? targetElement : targetElement.closest('.burger');
			elem.classList.toggle('active-burger');

			const menuBody = document.querySelector('.header__menu');
			menuBody.classList.toggle('menu-active');
		}
	}
	//------Действия-при-кликах-End-----
}