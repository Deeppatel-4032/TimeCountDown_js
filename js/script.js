//selection id 
let day = document.getElementById("day");
let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");

// selection from id
let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

// Initialize time values
let d = 0;
let h = 0;
let m = 0;
let s = 0;
let Interval;

const choice = () => {
    let dy = JSON.parse(days.value);
    let ho = JSON.parse(hours.value);
    let mi = JSON.parse(minutes.value);
    let se = JSON.parse(minutes.value);

    day.innerHTML = dy;
    hour.innerHTML = ho;
    minute.innerHTML = mi;
    second.innerHTML = se;
    
}

//setTimOut Function
const setTime = () => {
    Interval = setInterval(() => {
        s--;
        if(d <= 0) {   
            h--;
            d = 24;
            if (h < 10) {
                hour.innerHTML = "0" + h;
            } else {
                hour.innerHTML = h;
            }
        }

        if (h <= 0) {
            d--;
            h = 23;
            if (d < 10) {
                day.innerHTML = "0" + d;
            } else {
                day.innerHTML = d;
            }
        }

        if (m <= 0) {
            h--;
            m = 59;
            if (h < 10) {
                hour.innerHTML = "0" + h;
            } else {
                hour.innerHTML = h;
            }
        }

        if (s <= 0) {
            m--; // -1
            s = 59;
            if (m < 10) {
                minute.innerHTML = "0" + m;
            } else {
                minute.innerHTML = m;
            }
        }

        if (s < 10) {
            second.innerHTML = "0" + s;
        } else {
            second.innerHTML = s;
        }
    }, 1000);
}

//timeOutStop Function count down stop karva 
const timeOutStop = () => {
    clearInterval(Interval);
}
