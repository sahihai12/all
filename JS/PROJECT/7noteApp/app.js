'use strict';

const add_icon = document.querySelector('.add_icon'),
    popup = document.querySelector('.popup'),
    ellipsis = document.querySelector('.ellipsis'),
    ellipsisUl = document.querySelector('.ellipsis ul'),
    form = document.querySelector('.popup_box form'),
    add_list_after = document.querySelector('.add'),
    popup_boxP = document.querySelector('.popup_box p span'),
    popup_btn = document.querySelector('.popup_btn'),
    title = document.querySelector('.popup_box form input'),
    descripition = document.querySelector('.popup_box form textarea');;



// open a popup
add_icon.addEventListener('click', () => {
    popup.classList.add('show');
    popup_boxP.innerHTML = "Add a new note";
    popup_btn.innerHTML = "Add Note";
    title.value = '';
    descripition.value = '';
});

// close a popup
function close_popup() {
    popup.classList.remove('show');
}

// open a edit and delete column
function showellipsis(elem) {
    const nextchild = elem.nextElementSibling;
    // console.log(elem);
    // console.log(nextchild);
    nextchild.classList.toggle('show')
    document.addEventListener('click', (e)=>{
        if(e.target.tagName != 'I' || e.target != elem){
            nextchild.classList.remove('show')
        }
    });
}



const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'Sep', 'Oct', 'March', 'Nov', 'Dec'];



// form : get data from form and store it
let isupdated = false , updateat;
const notes = JSON.parse(localStorage.getItem('notes') || '[]');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let title = document.querySelector('.popup_box form input'),
        desc = document.querySelector('.popup_box form textarea');

    let dateNow = new Date(),
        day = dateNow.getDate(),
        year = dateNow.getFullYear(),
        month = months[dateNow.getMonth()];
    let note = {
        titleValue: title.value,
        descValue: desc.value,
        date: `${day} ${month} , ${year}`
    }
    if (!isupdated) {
        notes.push(note);
    } else {
        notes[updateat] = note;
    }

    // store at local location
    localStorage.setItem('notes', JSON.stringify(notes));
    // to reload page
    location.href = window.location.href;

});



// showing result

function showResult() {
    notes.forEach((element , index) => {
        let list = `<li class="items">
        <div class="item_head">
            <h4>${element.titleValue}</h4>
            <p>${element.descValue}</p>
        </div>
        <div class="item_footer">
            <p class="date">${element.date}</p>
            <div class="ellipsis">
                <i class="fas fa-ellipsis-h" onclick="showellipsis(this);"'></i>
                <ul>
                    <li class="editnote" onclick="editnote(${index} , '${element.titleValue}' , '${element.descValue}')">Edit</li>
                    <li class="deletenote" onclick="deletenote(${index});">Delete</li>
                </ul>
            </div>
        </div>
    </li>`;
        add_list_after.insertAdjacentHTML('afterend', list);
    });
}
showResult();


function deletenote(index){
    const data = notes[index];
    console.log(data);
    notes.splice(index , 1);
    localStorage.setItem('notes' , JSON.stringify(notes));
    location.href = window.location.href;
}


function editnote(index  , tit , desc) {
    // console.log(index, tit , desc);
    add_icon.click();
    popup_boxP.innerHTML = "Update Note";
    popup_btn.innerHTML = "Update Note";
    title.value = tit;
    descripition.value = desc;
    isupdated = true;
    updateat = index;
}