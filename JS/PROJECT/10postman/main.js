// "use strict";

const submitBtn = document.querySelector("button"),
    json = document.querySelector(".json"),
    addparam = document.querySelector(".add"),
    output = document.querySelector('.output');

let jsonData = document.querySelector(".jsonData input"),
customParameter = document.querySelector(".customParameter input"),
paramsection = document.querySelector(".paramsection");

jsonData.addEventListener("click", () => {
    paramsection.style.display = "none";
    json.style.display = "block";
});

customParameter.addEventListener("click", () => {
    paramsection.style.display = "block";
    json.style.display = "none";
});
let i = 0;
addparam.addEventListener("click", () => {
    ++i;
    let data = `<div class="parameters">
    <input type="text" class="parameterKey${i}" placeholder="Key">
    <input type="text" class="parameterValue${i}" placeholder="Value">
    <div class="close"><i class="fas fa-minus"></i></div>
</div>`;
    paramsection.insertAdjacentHTML("beforeend", data);

    let close = document.querySelectorAll('.close');
    close.forEach(cl => {
        cl.addEventListener('click', () => {
            cl.parentElement.remove();
        })
    });
});

submitBtn.addEventListener("click", () => {
    let url = document.querySelector('.url');
    let request = document.querySelector('input[name="request"]:checked').value;
    let contentType = document.querySelector('input[name="content"]:checked').value;
    let data = {};

    if (contentType == 'customtype') {
        paramsection = document.querySelectorAll('.paramsection .parameters');
        paramsection.forEach((section , index) => {
            let key = document.querySelector(`.parameterKey${index}`).value;
            let value = document.querySelector(`.parameterValue${index}`).value;
            data[key] = value;
        });
    } else {
        // console.log(contentType);
        let textarea = document.querySelector('.jsonforpost').value;
        data = textarea;
    }

    if (url.value) {
        if (request == 'get') {
            fetch(url.value).then((response) => response.json()).then(jsons => outputdisplay(jsons));
        } else {
            console.log(JSON.stringify(data));
            fetch(url.value, {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                .then((response) => response.json())
                .then((jsons) => outputdisplay(jsons)).catch(err => console.log(err));
        }
    } else {
        throw new Error('url must be valid')
    }
});

function outputdisplay(datafromrequest) {
    console.log(datafromrequest);
    console.log('from output display');
    output.style.display = 'block';  
    const outputValue = document.querySelector('.output p');
    outputValue.innerHTML = JSON.stringify(datafromrequest) ;
    console.log('output value');
}


