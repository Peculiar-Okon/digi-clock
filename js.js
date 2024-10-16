//To update the clock
function updateClock() {
    const now = new Date(); // Get the current date and time
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    //hours, minutes, and seconds to always show two digits
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Update the HTML elements with the current time
    document.getElementById('hour').textContent = hours;
    document.getElementById('min').textContent = minutes;
    document.getElementById('sec').textContent = seconds;
}

setInterval(updateClock, 1000);

updateClock();