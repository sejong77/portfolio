'use strict';

// 평상시엔 Navbar가 투명하고 스크롤을 내리면 background-color가 설정이 된다.
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
	if (scrollY > navbarHeight) {
		navbar.classList.add('navbar--dark');
	} else {
		navbar.classList.remove('navbar--dark');
	}
});

// Navbar의 메뉴, Contact Me 버튼을 선택하면 선택한 메뉴로 스크롤링이 된다.
const navbarMenu = document.querySelector('.navbar__menu');
const contactBtn = document.querySelector('.home__contact');
navbarMenu.addEventListener('click', event => {
	const target = event.target;
	const link = target.dataset.link;
	if (link == null) {
		return;
	}
	const scrollTo1 = document.querySelector(link);
	scrollTo1.scrollIntoView({ behavior: 'smooth' });
});

contactBtn.addEventListener('click', event => {
	const targetLink = event.target.dataset.link;
	const scrollTo2 = document.querySelector(targetLink);
	scrollTo2.scrollIntoView({ behavior: 'smooth' });
});
