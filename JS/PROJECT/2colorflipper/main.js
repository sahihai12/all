const body = document.querySelector('body'),
span = document.querySelector('.wrapper h1 span');
const color_value = [1,2,3,4,5,6,7,8,9,0,'a','b','c','d','e','f'];

document.querySelector('.changeColor').addEventListener('click' , ()=>{
    let color_code = '';
    for (let i = 0; i < 6; i++) {
        let rand_num = Math.floor((Math.random() * 15)+1);
        color_code+=color_value[rand_num];
        console.log(color_code);
        body.style.background = `#${color_code}`;
        span.style.color = `#${color_code}`;
    }
});