var start_button = document.getElementById('start')  //accessing start button
var stop_button = document.getElementById('stop')    //accessing stop button
var reset_button = document.getElementById('reset')  //accessing reset button  
var timer = document.getElementById('time')          //accessing time element for displaying timer
var readings = document.getElementById('readings')   //accessing readings area for displaying the elapsed time

let msec = 0;                                         //counts milli seconds
let sec = 0;                                         //counts seconds
let min = 0;                                        //counts mins       
  
let interval = null;


window.addEventListener('load', ()=>{                //onloading the window timer sets to 0
    timer.innerHTML = "00:00:00";
})
start_button.addEventListener('click',starttimer);   //onclicking the start button, it starts the timer
stop_button.addEventListener('click',pause);         //onclicking the stop button, it stops the timer
reset_button.addEventListener('click',()=>{          //onclicking the reset button, it resets timer to 0 and stops the timer
    timer.innerHTML = "00:00:00";
    clearInterval(interval)
    msec = 0;                                        //counts milli seconds
    sec = 0;                                         //counts seconds
    min = 0; 
})


function clock(){                                    
    msec++;                                           //sec will increase by 1 for every 1000 ms       
    if(msec == 0)                                     //if msec = 0, it should be in double digits
    {
        msec = "00"
    }
    if(sec == 0)                                     //if sec = 0, it should be in double digits
    {
        sec = '00';
    }
    if(min == 0)                                     //if min = 0, it should be in double digits
    {
        min = "00";
    }

    if(msec<10)                                      //if msec <10, it should be in double digits
    {
        msec = '0' + msec;
    }
    
    if(msec == 100)                                  //if msec = 100, it  should start from 0
    {
        msec = 0
        sec++;                                       //incrementing sec
        if(sec<10)                                   //if sec <10, it should be in double digits
        {
            sec = '0' + sec         
        }

        if(sec == 60)                                //if min = 60, it  should start from 0
        {
            sec = 0;
            min++;                                   // incrementing mins
            if(min<10)                               //if min <10, it should be in double digits
            {
                min = '0' + min
            }
        }
    }


    timer.innerHTML = `${min}:${sec}:${msec}`         // displaying the timer dynamically on the page
}

function starttimer(){                                // function to start the timer using the interval
    clearInterval(interval)                           // clears the timer set with SetInterval method
    interval = setInterval(clock,10)
}


function pause(){                                     //function to pause the timer on clicking the stop button
    clearInterval(interval)                               // and displaying the ran time

    readings.innerHTML += `${hour}:${min}:${sec} <br>`;
}
