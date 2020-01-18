    setInterval (tellTime, 1);

function tellTime (time){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    document.getElementById("watch").innerHTML = h + " : " + m + " : " + s;

}