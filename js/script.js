let day = document.getElementById("day");
let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");

let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

let d = 0, h = 0, m = 0, s = 0;
let Interval;

const choice = () => {
    d = parseInt(days.value) || 0;
    h = parseInt(hours.value) || 0;
    m = parseInt(minutes.value) || 0;
    s = parseInt(seconds.value) || 0;

    updateDisplay();
}

const updateDisplay = () => {
    day.innerHTML = d.toString().padStart(2, '0');
    hour.innerHTML = h.toString().padStart(2, '0');
    minute.innerHTML = m.toString().padStart(2, '0');
    second.innerHTML = s.toString().padStart(2, '0');
}

const setTime = () => {
    if (Interval) clearInterval(Interval); // Prevent multiple timers

    Interval = setInterval(() => {
        if (d === 0 && h === 0 && m === 0 && s === 0) {
           return clearInterval(Interval);
        }

        if (s > 0) {
            s--;
        } else {
            s = 59;
            if (m > 0) {
                m--;
            } else {
                m = 59;
                if (h > 0) {
                    h--;
                } else {
                    h = 23;
                    if (d > 0) {
                        d--;
                    }
                }
            }
        }
        updateDisplay();
    }, 1000);
}

const timeOutStop = () => {
    clearInterval(Interval);
}
