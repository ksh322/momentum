const clock= document.querySelector("h2#clock");

function getClock(){
    const date= new Date();
    const hours= String(date.getHours());
    const minutes= String(date.getMinutes());
    const seconds= String(date.getSeconds());
    
    
    clock.innerText = `${hours.padStart(2,"0")}:${minutes.padStart(2,"0")}:${seconds.padStart(2,"0")}`;
}
getClock();
setInterval(getClock,1000); //(function name,ms)