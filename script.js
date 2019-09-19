const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date=new Date();
let hour= date.getHours();
let minute=date.getMinutes();
let second= date.getSeconds();

console.log(date);
console.log("Hour :"+hour+"Minutes :"+minute+"Seconds :"+second);

let hrPosition=hour*360/12+(minute*(360/60)/12);
let minPosition=minute*360/60+(second*(360/60)/60);
let secPostion=second*360/60;

function runTheClock()
{
hrPosition=hrPosition+(3/360);
minPosition=minPosition+(6/60);
secPostion=secPostion+6;

HOURHAND.style.transform = "rotate("+hrPosition+"deg)";
MINUTEHAND.style.transform = "rotate("+minPosition+"deg)";
SECONDHAND.style.transform = "rotate("+secPostion+"deg)";
}

var interval= setInterval(runTheClock,1000)
