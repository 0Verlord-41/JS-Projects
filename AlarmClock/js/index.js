console.log('Working');

let alarmAudio = new Audio('audio/alarm_2.mp3');
// alarmAudio.play();
let setTime = document.getElementById('setTime');

setTime.addEventListener('click', (e)=>{
    e.preventDefault();

    let inputTime = document.getElementById('inputTime');
    let text = document.getElementById('confirm');

    let myObj = {
        aTime: inputTime.value
    }
    console.log(myObj.aTime);
    text.innerHTML = `<p>Alarm successfully set to ${myObj.aTime}</p>`

    localStorage.setItem("Alarm", JSON.stringify(myObj));

    setTimeout(()=>{
        inputTime.value= "";
        text.innerHTML = "";
    }, 8000);

});

var play = window.setInterval(playsound, 10000);

function playsound(){
    let getTime = localStorage.getItem("Alarm");
    let myObj2 = JSON.parse(getTime);

    var d = new Date();
    var hour = d.getHours();
    var minute = d.getMinutes();

    let result = hour+':'+minute

    if(result == myObj2.aTime ){
        alarmAudio.play();
    }
}

