console.log('Working');

var clocktime = window.setInterval(() => {
    var d = new Date();
    var hour = d.getHours();
    var minute = d.getMinutes();
    var second = d.getSeconds();

    minute = (minute < 10? "0":"")+minute;
    second = (second < 10? "0":"")+second;

    let dayTime = (hour > 12)? "PM" : "AM";

    hour = (hour>12)? hour-12 : hour;
    hour = (hour==0)? 12 : hour;

    let result = hour+':'+minute+':'+second + " " + dayTime;

    document.getElementById("getTime").innerHTML = result;
}, 1000);