import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';
// init Swiper:
const swiper = new Swiper('.swiper', {
	// configure Swiper to use modules
	modules: [Navigation, Pagination],
});

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