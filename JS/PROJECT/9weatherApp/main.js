'use strict';

const cityinput = document.querySelector('.cityname'),
location_icon = document.querySelector('.location'),
btn = document.querySelector('.btn'),
city = document.querySelector('.city'),
dateData = document.querySelector('.date'),
dayData = document.querySelector('.day'),
celcius = document.querySelector('.celcius'),
fahrenheit = document.querySelector('.fahrenheit'),
image = document.querySelector('.image img'),
weathermain = document.querySelector('.weathermain'),
cloudper = document.querySelector('.cloudsper span'),
humidity = document.querySelector('.humidity .value'),
wind = document.querySelector('.wind .value'),
sunset = document.querySelector('.sunset .value'),
sunrise = document.querySelector('.sunrise .value');

// fetch data from city name or icon
let url , latitude , longitude , cityname , hours , min , newdate , fahre , celci;

location_icon.addEventListener('click' , () => {
    // if (navigator) {
        navigator.geolocation.getCurrentPosition((e) => {
            url = `https://api.openweathermap.org/data/2.5/weather?lat=${e.coords.latitude}&lon=${e.coords.longitude}&appid=de5f3c726f96d8d5af62ae5017f72c99`;
            fetchData(url);
        } , (error) => {
            if(error.code == 1) {
                alert("error: Access is denied!");
             } else if( error.code == 2) {
                alert("error: Position is unavailable!");
             } 
        });
        cityinput.value = '';
    // } else {
        // alert('maybe your are allowed for geoloaction');
    // }
});

btn.addEventListener('click' , () =>{
    url = `https://api.openweathermap.org/data/2.5/weather?q=${cityinput.value}&appid=de5f3c726f96d8d5af62ae5017f72c99`;
    fetchData(url);
});

async function fetchData(url) {
    const res = await fetch(url);
    console.log(res);
    if (res.ok) {
        let result = await res.json();
        showData(result);
    }else{
        throw new Error('there is some error');
        // fetchData().catch(e => console.log(e));
    }
}
    
    
function showData(rsl){
    console.log(rsl);
    city.textContent = rsl.name;
    cloudper.textContent = `${rsl.clouds.all}%`;
    weathermain.textContent = rsl.weather[0].main;
    image.src = `http://openweathermap.org/img/w/${rsl.weather[0].icon}.png`;
    humidity.innerHTML = `${rsl.main.humidity}%`;
    wind.textContent =  `${rsl.wind.speed} km/h`;
    sunset.textContent = timeCon(rsl.sys.sunset);
    sunrise.textContent = timeCon(rsl.sys.sunrise);
    celci = rsl.main.temp - 273.15;
    celcius.innerHTML = `${celci.toFixed(1)} <span>°C</span>`;
    fahre = 1.8*(rsl.main.temp - 273.15)+32
    fahrenheit.innerHTML = `${fahre.toFixed(1)} <span>°F</span>`;
}

// convert millisecond into hours and min 
function timeCon(params) {
    newdate = new Date(params * 1000);
    hours = newdate.getHours();
    min = newdate.getMinutes();
    let resfinaltime = hours + ' : ' + min;
    return resfinaltime; 
}


// day and date 
// city name
// temperature in cel
// temperature in faren 
// humidity
// wind speed 
// sunrize and sunset
// weather - clear or haze
// weatyher icon in img 
// clouds percentage
// get data from city or get location 


 




const getdayDate = () =>  {
    const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const d = new Date();
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    let day = weekday[d.getDay()];
    // console.log(date, month , year);
    dateData.textContent = `${date} ${month}, ${year}`;
    dayData.textContent = day;
}

getdayDate();

