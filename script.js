var h = document.getElementById("hour");
var min = document.getElementById("min");
var sec = document.getElementById("sec");


function Time() {
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let secRotation = 6 * ss;
    let minRotation = 6 * mm;

    sec.style.transform = `rotate(${secRotation}deg)`;
    min.style.transform = `rotate(${minRotation}deg)`;
    // h.style.transform = `rotate(${hrs}deg)`;
}

setInterval(Time, 1000);