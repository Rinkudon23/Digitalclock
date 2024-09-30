setInterval(()=>{

let hour=document.querySelector("#hour_section>h1")
let minute =document.querySelector("#minute_section>h1")
let second=document.querySelector("#second_section>h1")

let currenthour=new Date().getHours();
let currentminute=new Date().getMinutes();
let currentsecond=new Date().getSeconds();


// hour.innerHTML= currenthour;
minute.innerHTML=currentminute;
// second.innerHTML=currentsecond;


currentsecond<10 
? (second.innerHTML = `0${currentsecond}`)
: (second.innerHTML=currentsecond);


currenthour>12
? (hour.innerHTML=currenthour-12)
: hour.innerHTML= currenthour;

currentminute<10 
? (minute.innerHTML = `0${currentminute}`)
: (minute.innerHTML=currentminute);





},1000);


