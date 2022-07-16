console.log('this is calculator');

const evalinput = document.querySelector('.evalinput'),
      evalbtn = document.querySelector('.evalcalculate i'),
      errorvalue = document.querySelector('.evaluateerror'),
      evaluatsucess = document.querySelector('.evaluatsucess'),
      errorvalueSpan = document.querySelector('.evaluateerror span');


      

// document.addEventListener(`click`,()=>{
//     evalinput.focus()
// })

evalbtn.addEventListener('click' , ()=>{
    if (evalinput.value) {
        try {
            let result = eval(evalinput.value);
            evaluatsucess.textContent = `Answer : ${result}`;
            evaluatsucess.style.display = 'block';
            evaluatsucess.style.color = '#008000';
        } catch (error) {
            console.log(error);
            errorvalueSpan.textContent = 'Enter only real number';
            errorvalue.style.display = 'block';
        }
    } else {
        errorvalueSpan.textContent = 'Please enter an number';
        errorvalue.style.display = 'block';
    }
}); 