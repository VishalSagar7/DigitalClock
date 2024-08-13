const hoursh = document.getElementById('hours');
const minutesh = document.getElementById('minuts');
const secondsh = document.getElementById('seconds');
const ampm = document.getElementById('am-pm');


setInterval(() => {
    const now = new Date(); // Update to get the current time each interval
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    // Ensure two digits for minutes and seconds

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    if(hours <=12){
        ampm.innerText = 'AM';
    }else{
        ampm.innerText = 'PM';
    }

    if(hours > 12){
        hours = (13 % hours) + 1;
    }

    if(hours < 10){
        hours = '0' + hours;
    }

    
    console.clear(); // Clear the console before logging the new time

    hoursh.innerText = hours;
    minutesh.innerText = minutes;
    secondsh.innerText = seconds;

    // console.log(`Current time is ${hours}:${minutes}:${seconds}`);
}, 1000); // Update every second
