'use strict';


const boxes = document.querySelectorAll('.box'),
img = document.querySelector('.box img');



boxes.forEach(box => {
    box.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    box.addEventListener('drop', (e) => {
        console.log('Drop has been triggered');
        e.target.append(img);
    })
});
