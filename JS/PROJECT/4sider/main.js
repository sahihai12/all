'use strict'
console.log('slider js');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slides = document.querySelectorAll('.slides .slide');
let lengthslide = slides.length;


let i = 1;
const slideRight = () => {
        if(slides[i] != undefined){
            slides[i-1].style.transform = `translateX(-${i}00%)`;
            slides[i].style.transform = `translateX(-${i}00%)`;
            i++;
        }
}

const slideLeft = () => {
    if (i-1) {
        i--;
        slides[i].style.transform = `translateX(00%)`;
        slides[i-1].style.transform = `translateX(-${i-1}00%)`;
        console.log(i);
    }
}

if (i < lengthslide) {
    left.addEventListener('click' , slideLeft);
    right.addEventListener('click' , slideRight);
}else{
    console.log('no more slides');
}