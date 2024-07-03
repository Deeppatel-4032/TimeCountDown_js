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
let h = 23;
let m = 55;
let s = 0;
let Interval;

//setTimOut Function
const setTimeOut = () => {
    Interval = setInterval(() => {
        s++;
        if (s < 10) {
            second.innerHTML = "0" + s;
        } else {
            second.innerHTML = s;
        }
        
        if (s > 59) {
            m++;
            s = 0;
            if (m < 10) {
                minute.innerHTML = "0" + m;
            } else {
                minute.innerHTML = m;
            }
        }
        
        if (m > 59) {
            h++;
            m = 0;
            if (h < 10) {
                hour.innerHTML = "0" + h;
            } else {
                hour.innerHTML = h;
            }
        }
        
        if (h > 23) {
            d++;
            h = 0;
            if (d < 10) {
                day.innerHTML = "0" + d;
            } else {
                day.innerHTML = d;
            }
        }
    }, 10);
}

const timeOutStop = () => {
    clearInterval(Interval);
}
