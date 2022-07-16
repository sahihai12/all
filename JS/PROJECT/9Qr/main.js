'use strict';


const formBtn = document.querySelector('.form button'),
      image = document.querySelector('.qr-code img'),
      wrapper = document.querySelector('.wrapper'),
      qrCode = document.querySelector('.qr-code '),
      data = document.querySelector('.form input');

formBtn.addEventListener('click' , ()=>{
    wrapper.style.height = 'unset';
    qrCode.style.opacity = 1;
    let urlData = data.value;
    image.src = `https://api.qrserver.com/v1/create-qr-code/?data=${urlData}&amp;size=100x100`;
});
