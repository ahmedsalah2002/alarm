let clock=document.querySelector(".clock");
    let hours;
    let minutes;
    let seconds;
    let times;
function Clock(){
     date=new Date();
     hours=date.getHours();
     minutes=date.getMinutes();
     seconds=date.getSeconds();
     times="AM"
    if(hours<10) hours="0"+hours;
    if(hours==12) times="PM";

    if(minutes<10) minutes="0"+minutes;
    if(seconds<10) seconds="0"+seconds;
    if(hours>12) {
        hours=hours-12;
        times="PM"
    }
    clock.innerHTML=`${hours} : ${minutes} : ${seconds}  ${times}`
}

setInterval(() => {
    Clock();
    
}, 1000);

let hour=document.querySelector("#hour");
for(let i=1;i<=12;i++){
    hour.innerHTML+=`<option value="${i}">${i}</option>`
}
let minute=document.querySelector("#minute");
for(let i=0;i<=59;i++){
    minute.innerHTML+=`<option value="${i}">${i}</option>`
}
let time=document.querySelector("#time");

let button=document.querySelector(".button");
let desc=document.querySelector(".desc");
button.onclick=function(){
    let difHours, difMinutes;
    if(time.value=="PM"&&hour.value==12){
        times="PM"
    }

    else if(time.value=="AM"&&hour.value==12){
       times="PM"
    }
    
   
    if((time.value=="AM"&&times=="AM")||(time.value=="PM"&&times=="PM")){
         difHours=Math.abs(hours-Number(hour.value));
         difMinutes=Math.abs(60-minutes +Number(minute.value));
    }
    else{
        difHours=Math.abs(hours-(Number(hour.value)+12));
         difMinutes=Math.abs(60-minutes +Number(minute.value));
    }
    if(hour.value==Number(hours)&&time.value==times&&minute.value<=Number(minutes)){
        difHours+=24
    }
    if(difMinutes>=60){
        difHours+=0;
        difMinutes-=60
    }
    else difHours-=1;
   
    desc.innerHTML=`Alarm will ring after ${difHours} hours and ${difMinutes} minutes`;
    button.textContent="Cancel Alarm"
    button.onclick=function(){
        location.reload()
    }
    
    function check(){
        if(Number(hours)==Number(hours)+difHours&&Number(minutes)==minute.value){
            document.querySelector("#ring").play();
            
        }
        else{
            console.log("not ddd");
        }
    }
    setInterval(() => {
        check()
        
    }, 1000);
    
}

// console.log(Number(hours)==hour.value);