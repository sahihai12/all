'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


const header = document.querySelector('header');


const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML = 'Minima distinctio laborum beatae ea earum deleniti odit, enim quibusdam molestias quo. <button class="cokkie-btn">Got It</button>';

header.prepend(message);

document.querySelector('.cokkie-btn').addEventListener('click', () => {
  // console.log(message.parentElement.removeChild(message));
  // 2nd way to do 
  message.remove();
});


// smoth scrolling 

const btn__scrool = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
btn__scrool.addEventListener('click', function (e) {
  console.log(e);
  const scrool1 = section1.getBoundingClientRect();
  // console.log(section1);
  console.log(scrool1);

  window.scrollTo(scrool1.left, scrool1.y + window.pageYOffset);
  // section1.scrollIntoView();

});


const allLinks = document.querySelectorAll('.nav__link');

allLinks.forEach(element => {
  element.addEventListener('click', (e) => {
    e.preventDefault();
    let attr = element.getAttribute('href');
    document.querySelector(`${attr}`).scrollIntoView();
  });
});

// dom traverse exercise 
// Traversing downwards
// element.querySelector
// element.querySelectorAll
// element.children
// Traversing upwards
// element.parentElement
// element.closest
// Traversing sideways
// element.nextElementSibling
// element.previousElementSibling
// Combine parentElement, children, and index


const data_tabs = document.querySelectorAll('[data-tab]');
const tabBtn = document.querySelectorAll('.operations__tab');
const tabcontent = document.querySelectorAll('.operations__content');

data_tabs.forEach(tabs => {
  tabs.addEventListener('click', () => {
    tabBtn.forEach(t => t.classList.remove('operations__tab--active'));
    tabs.classList.add('operations__tab--active');

    // active  content
    tabcontent.forEach(c => c.classList.remove('operations__content--active'));

    // get tab 
    // console.log(tabs.dataset);
    // console.log(`operations__content--${tabs.getAttribute('data-tab')}`);
    const tabc = document.querySelector(`.operations__content--${tabs.getAttribute('data-tab')}`);
    tabc.classList.add('operations__content--active');
  });


});

// lazy load

const lazyImg = document.querySelectorAll('.lazy-img');
const allsection = document.querySelectorAll('.section');

const option = {
  threshold : 0.2,
}

const callback = function(entries , observer){
  entries.forEach(entry => {
    if(entry.isIntersecting){      
      if(entry.target.classList.contains('lazy-img')){
        entry.target.classList.remove('lazy-img');
      }
      entry.target.classList.add('showsection');
    }else{
      if(entry.target.classList.contains('lazy-img')){
        entry.target.classList.add('lazy-img');
      }
      entry.target.classList.remove('showsection');
    }
  });
} 

const observer = new IntersectionObserver(callback , option);


allsection.forEach(section => {
  observer.observe(section);
});


lazyImg.forEach(img =>{
  observer.observe(img)
});
