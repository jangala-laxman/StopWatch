var start_button = document.getElementById('start')  //accessing start button
var stop_button = document.getElementById('stop')    //accessing stop button
var reset_button = document.getElementById('reset')  //accessing reset button  
var timer = document.getElementById('time')          //accessing time element for displaying timer
var readings = document.getElementById('readings')   //accessing readings area for displaying the elapsed time

let sec = 0;                                         //counts seconds
let min = 0;                                         //counts mins
let hour = 0;                                        //counts hours       
  
let interval = null;
// let oHour = document.getElementById("hours");
// let oMin = document.getElementById("mins");
// let oSec = document.getElementById("seconds");

window.addEventListener('load', ()=>{                //onloading the window timer sets to 0
    timer.innerHTML = "00:00:00";
})
start_button.addEventListener('click',starttimer);   //onclicking the start button, it starts the timer
stop_button.addEventListener('click',pause);         //onclicking the stop button, it stops the timer
reset_button.addEventListener('click',()=>{          //onclicking the reset button, it resets timer to 0 and stops the timer
    timer.innerHTML = "00:00:00";
    clearInterval(interval)
})


function clock(){                                    
    sec++;                                           //sec will increase by 1 for every 1000 ms       
    if(sec == 0)                                     //if sec = 0, it should be in double digits
    {
        sec = "00"
    }
    if(min == 0)                                     //if min = 0, it should be in double digits
    {
        min = '00';
    }
    if(hour == 0)                                    //if hour = 0, it should be in double digits
    {
        hour = "00";
    }

    if(sec<10)                                       //if sec <10, it should be in double digits
    {
        sec = '0' + sec;
    }
    
    if(sec == 60)                                    //if sec = 60, it  should start from 0
    {
        sec = 0
        min++;                                       //incrementing minutes
        if(min<10)                                   //if min <10, it should be in double digits
        {
            min = '0' + min             
        }

        if(min == 60)                                //if min = 60, it  should start from 0
        {
            min = 0;
            hour++;                                  // incrementing hours
            if(hour<10)                              //if hour <10, it should be in double digits
            {
                hour = '0' + hour
            }
        }
    }


    timer.innerHTML = `${hour}:${min}:${sec}`         // displaying the timer dynamically on the page
}

function starttimer(){                                // function to start the timer using the interval
    clearInterval(interval)                           // clears the timer set with SetInterval method
    interval = setInterval(clock,1000)
}


function pause(){                                     //function to pause the timer on clicking the stop button
    clearInterval(interval)                               // and displaying the ran time

    readings.innerHTML += `${hour}:${min}:${sec} <br>`;
}
