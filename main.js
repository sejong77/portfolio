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

// 스크롤을 내리면 Home화면의 투명도가 변한다.
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
	home.style.opacity = 1 - scrollY / homeHeight;
});

// 스크롤을 내리면 맨 상단으로 이동하는 버튼이 생긴다.
const arrowUp = document.querySelector('.arrowUp');
document.addEventListener('scroll', () => {
	if (scrollY > homeHeight / 2) {
		arrowUp.classList.add('visible');
	} else {
		arrowUp.classList.remove('visible');
	}
});

arrowUp.addEventListener('click', () => {
	const arrowBtn = document.querySelector('#home');
	arrowBtn.scrollIntoView({ behavior: 'smooth' });
});

// My Work 부분에서 버튼을 클릭하면 프로젝트를 필터링 한다.
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', event => {
	const filter =
		event.target.dataset.filter || event.target.parentNode.dataset.filter;
	if (filter == null) {
		return;
	}

	// 클릭한 버튼에 focus가 맞춰진다.
	const active = document.querySelector('.category__btn.selected');
	active.classList.remove('selected');
	const target =
		event.target.nodeName === 'BUTTON' ? event.target : event.target.parentNode;
	target.classList.add('selected');

	projectContainer.classList.add('animation-out');
	setTimeout(() => {
		projects.forEach(project => {
			if (filter === '*' || filter === project.dataset.type) {
				project.classList.remove('invisible');
			} else {
				project.classList.add('invisible');
			}
		});
		projectContainer.classList.remove('animation-out');
	}, 300);
});
