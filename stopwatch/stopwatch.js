let min, sec, msec;
let cmin = 0,
    csec = 0,
    cmsec;
let tInterval;
let n = 1,
    smin = 0,
    ssec = 0,
    smsec = 0;

function Start() {
    const d = new Date();
    min = d.getMinutes();
    sec = d.getSeconds();
    msec = d.getMilliseconds();
    tInterval = setInterval(showTime, 10);
}


function showTime() {
    const d = new Date();
    cmsec = (((d.getMilliseconds() + 1000 - msec) % 1000) - (((d.getMilliseconds() + 1000 - msec) % 1000) % 10)) / 10;
    if (cmsec == 0) csec++;
    if (csec == 60) cmin++;
    if (csec == 60) csec -= 60;
    document.getElementById("minutes").innerHTML = cmin;
    document.getElementById("seconds").innerHTML = csec;
    document.getElementById("milliSeconds").innerHTML = cmsec;
}

function Stop() {
    clearInterval(tInterval);

}

function Lap() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(n);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    let a = (cmin - smin + 60) % 60;
    let b = (csec - ssec + 60) % 60;
    let c = (cmsec - smsec + 100) % 100;
    cell1.innerHTML = n;
    cell2.innerHTML = a + " : " + b + " . " + c;
    cell3.innerHTML = cmin + " : " + csec + " . " + cmsec;
    n++;
    smin = cmin;
    ssec = csec;
    smsec = cmsec;
}