const timermin = document.querySelector('.timermin'),
    timersec = document.querySelector('.timersec'),
    timerbtn = document.querySelector('.timerbtn'),
    timerValue = document.querySelector('.timerValue'),
    clockaminate = document.querySelector('.clock span');
    
const audio = new Audio("https://file-examples.com/storage/feeeedd23462a0874a3d981/2017/11/file_example_OOG_1MG.ogg");

timerbtn.addEventListener('click', () => {
    // let startingTime = timerValue.value;
    let startingTime = 0.1;
    let min = startingTime * 60;  // 60 minute

    let x = setInterval(() => {
        const minute = Math.floor(min / 60); 
        let sec = min % 60;
        sec = sec <= 10 ? '0' + sec : sec;
        timermin.value = `${minute}`;
        timersec.value = `${sec}`;

        min--;
        if (min < 0) {
            clearInterval(x);
            clockaminate.style.animation = 'bounceclock linear 1s infinite';
            audio.play()
        }
    }, 1000);
})