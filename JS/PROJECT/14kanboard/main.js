'use strict';

const data = fetch('./mvc/data.json').then(response => response.json()).then(da => show(da)).catch(e => console.log(e)); 
const addcardbutton = document.querySelectorAll('.mainlist .addCard');


let dataBase = {
    "Todo": [],
    "doing": [],
    "done": []
} , id = 1;

addcardbutton.forEach(btns => {
    btns.addEventListener('click', () => {
        let formplacement = btns.previousElementSibling;
        let form = `<div class="addCardDiv">
                        <form>
                            <input type="text" class="titleValue" placeholder="Enter Title">
                            <input type="text" class="descValue" placeholder="Enter Desc">
                            <button class="submitdata" type="submit"><i class="fas fa-circle-right"></i></button>
                        </form>
                    </div>`;
        formplacement.insertAdjacentHTML('beforeend', form);  
        submit()
    })
});

function submit() {
    let forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let titleVal = form.children[0].value;
            let titleDes = form.children[1].value;
            create(titleVal , titleDes);
        });
    });
}



function create(tit , desc) {
    let today = new Date;
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let date = today.getDate()+ ' ' + months[today.getMonth()] + ', ' + today.getFullYear();
    let time = today.getHours() + ":" + today.getMinutes();
    let fulltitle = tit;
    let desccription = desc;
    let newdata = {
        'id': id++,
        'title': fulltitle,
        'desc':  desccription,
        'date': date,
        'time': time,
    }
    console.log(dataBase.Todo.push(newdata));
    // var fs = require('fs');

    // let jsongivenData = JSON.stringify(dataBase);
    // fs.writeFile('', jsongivenData);
    show();
}

function show() {
    console.log(dataBase);
}



