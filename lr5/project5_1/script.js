let clock = document.getElementById('clock');

function myFunc() {
    let now = new Date();
    let nowTime = now.toLocaleTimeString ();
    clock.innerHTML = nowTime;
}
setInterval(myFunc, 200);
