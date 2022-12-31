let sec= document.querySelector('.second-hand');
let min= document.querySelector('.min-hand');
let hour= document.querySelector('.hour-hand');

function updateClock(sec, min, hour){
    let date= new Date();
    let seconds= date.getSeconds();
    let mins= date.getMinutes();
    let hours= date.getHours();

    let secondpercentage= (seconds/60)*360 + 90;
    sec.style.transform= `rotate(${secondpercentage}deg)`;

    let minpercentage= (mins/60)*360 + 90;
    min.style.transform= `rotate(${minpercentage}deg)`;

    let hourpercentage= (hours/12)*360 + 90;
    hour.style.transform= `rotate(${hourpercentage}deg)`;
}

setInterval(updateClock, 1000, sec, min, hour);