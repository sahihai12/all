'use strict';

const tabslink = document.querySelectorAll('.tabslink'),
    tabsec = document.querySelectorAll('.tabssection > div');

tabslink.forEach(element => {

    element.addEventListener('click' , () => {
        tabsec.forEach(el =>{
            console.log(el);
            el.classList.remove('block');
        });
        tabslink.forEach(el =>{
            el.classList.remove('active');
        })
        let attr = element.getAttribute('data-tabs');
        element.classList.add('active');
        let selectDiv = document.querySelector(`.tabssection #${attr}`);
        // show div
        selectDiv.classList.toggle('block');
    });
});