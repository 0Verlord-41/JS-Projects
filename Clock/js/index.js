console.log('Working');

var clocktime = window.setInterval(() => {
    var d = new Date();
    var hour = d.getHours();
    var minute = d.getMinutes();
    var second = d.getSeconds();

    let result = hour+':'+minute+':'+second;

    document.getElementById("getTime").innerHTML = result;
}, 1000);