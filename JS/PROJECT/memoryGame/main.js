'use strict';

const data = [
    {
        name : 'fries',
        image : './image/fries.png'
    },
    {
        name : 'cheeseburger',
        image : './image/cheeseburger.png'
    },
    {
        name : 'hotdog',
        image : './image/hotdog.png'
    },
    {
        name : 'ice-cream',
        image : './image/ice-cream.png'
    },
    {
        name : 'milkshake',
        image : './image/milkshake.png'
    },
    {
        name : 'pizza',
        image : './image/pizza.png'
    },
    {
        name : 'fries',
        image : './image/fries.png'
    },
    {
        name : 'cheeseburger',
        image : './image/cheeseburger.png'
    },
    {
        name : 'hotdog',
        image : './image/hotdog.png'
    },
    {
        name : 'ice-cream',
        image : './image/ice-cream.png'
    },
    {
        name : 'milkshake',
        image : './image/milkshake.png'
    },
    {
        name : 'pizza',
        image : './image/pizza.png'
    }
]

data.sort(() => 0.5 - Math.random())

console.log(data);

// align images in wrapper container 
const wrapper = document.querySelector('.wrapper .images');
const scoredata = document.querySelector('.score');

data.forEach((el , index) => {

    let datael = `<img src="./image/blank.png" alt="blank" data-id="${index}">`;
    wrapper.insertAdjacentHTML('afterbegin', datael)
});

// showing images onclick and check it  and showing score
let count = 0;
let arr = [];
let arrName = [];
let highscore = 20;

function showcardimage() {
    if (count <= 1) {
        const imageid = this.getAttribute('data-id'); 
        arr.push(imageid);
        const carddetailsName = data[imageid].name;
        arrName.push(carddetailsName);
        const carddetailsimg = data[imageid].image;
        this.setAttribute('src' , carddetailsimg);  
        count += 1;
        // count white images
        const whitecount = document.querySelectorAll('.wrapper .images [alt="white"]')
        // removing elements
        if((count == 2 && highscore > 0 ) || (data.length == whitecount.length)){
            setTimeout(() => {
                if (arrName[0] == arrName[1]) {
                    arr.forEach(em =>{
                        let rmdata = document.querySelector(`.wrapper .images [data-id="${em}"]`);
                        console.log(rmdata);
                        rmdata.setAttribute('src', './image/white.png');
                        rmdata.setAttribute('alt', 'white');
                        rmdata.removeEventListener('click' , showcardimage);
                    })
                }else{
                    arr.forEach(em =>{
                        let rmdata = document.querySelector(`.wrapper .images [data-id="${em}"]`);
                        rmdata.setAttribute('src', './image/blank.png')
                        rmdata.setAttribute('alt', 'blank')
                    })
                    highscore--;
                }
                count = 0;
                arr = [];
                arrName = [];
            }, 1200);
        }else{
            scoredata.innerHTML = `Your Score: <span>${highscore}</span>`;
        }
    }
    

}

const allimages = document.querySelectorAll('.wrapper .images img');
allimages.forEach(el =>{
    el.addEventListener('click' , showcardimage)
})
