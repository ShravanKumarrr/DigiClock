let clock = () => {
    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let amorpm = "AM"

    if (hrs == 0) {
        hrs = 12
    }

    else if (hrs >= 12) {
        hrs = hrs - 12
        amorpm = "PM"
    }

    document.getElementById('hours').innerHTML = hrs
    document.getElementById('minutes').innerHTML = mins
    document.getElementById('secounds').innerHTML = secs
    document.getElementById('amorpm').innerHTML = amorpm

    setInterval(clock, 500)
};

clock();
