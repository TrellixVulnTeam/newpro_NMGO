'use strict';

const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navClose = document.getElementById('nav-close');
const navLink = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

navClose.addEventListener('click', () => {
  navMenu.classList.remove('active');
});

navLink.forEach((c) =>
  c.addEventListener('click', () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('active');
  })
);

const skillsContent = document.getElementsByClassName('skills__content');

var i;

for (i = 0; i < skillsContent.length; i++) {
  const arrowDown = document.getElementsByClassName('skills__arrow');

  skillsContent[i].addEventListener('click', function () {
    this.classList.toggle('open');
    arrowDown.classList.toggle('open');
  });
}

const modalViewer = document.querySelectorAll('.services__modal');
const modalBtns = document.querySelectorAll('.services__btn');
const modalClose = document.querySelectorAll('.services__modal-close');

const modal = function (modalClick) {
  modalViewer[modalClick].classList.add('active-modal');
};

modalBtns.forEach((modalBtns, i) => {
  modalBtns.addEventListener('click', () => {
    modal(i);
  });
});

modalClose.forEach((modalClose) => {
  modalClose.addEventListener('click', () => {
    modalViewer.forEach((modalViewer) => {
      modalViewer.classList.remove('active-modal');
    });
  });
});

let swiper = new Swiper('.swiper', {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// const sections = document.querySelectorAll('section');

// function scrollActive() {
//   const scrollY = window.pageYOffset;

//   sections.forEach(function (current) {
//     const sectionHeight = current.offsetHeight;
//     const sectionTop = current.offsetTop - 50;
//     const sectionId = current.getAttribute('id');
//     const navMenuA = document.querySelector(
//       '.nav__menu a[href*=' + sectionId + ']'
//     );

//     if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//       navMenuA.classList.add('active-link');
//     } else {
//       navMenuA.classList.remove('active-link');
//     }
//   });
// }

// window.addEventListener('scroll', scrollActive);

// const sectionTop = current.offsetTop - 50;
// const scrollY = window.pageYOffset;

// function scrollHeader() {
//   const nav = document.getElementById('header');

//   if (this.scrollY > 560) {
//     scrolltop.classList.add('show-scroll');
//   } else {
//     scrollY.classList.remove('show-scroll');
//   }
// }
// window.addEventListener('scroll', scrollHeader);

// scrollUps.addEventListener('click', () => {
//   scrollY = -660;
// });

function scrollUp() {
  const scrollY = window.pageYOffset;

  const scrollAction = document.getElementById('scroll-up');

  if (this.scrollY >= 660) {
    scrollAction.classList.add('show-scroll');
  } else {
    scrollAction.classList.remove('show-scroll');
  }
}

window.addEventListener('scroll', scrollUp);

const themeBtn = document.getElementById('theme-btn');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

const slectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getcurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getcurrentIcon = () =>
  themeBtn.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

if (slectedTheme) {
  document.body.classList[slectedTheme === 'dark' ? 'add' : 'remove'](
    darkTheme
  );
  themeBtn.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme);
}

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme);
  themeBtn.classList.toggle(iconTheme);
  localStorage.getItem('selected-theme', getcurrentTheme());
  localStorage.getItem('selected-theme', getcurrentIcon());
});
