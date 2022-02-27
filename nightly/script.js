setInterval(displayClock, 100);

function displayClock() {
    const name = "Jere"
    const greet = document.querySelector('#greeting');
    const time = document.querySelector('#time');

    let date = new Date();
    let hrs = date.getHours();
    let min = date.getMinutes();

    // Clock formatting
    if (hrs < 10)
        hrs = "0" + hrs
    if (min < 10)
        min = "0" + min

    // Greetings
    if (hrs < 12)
        greet.textContent = "Good morning, " + name;
    else if (hrs < 18)
        greet.textContent = "Good afternoon, " + name;
    else if (hrs < 24)
        greet.textContent = "Good evening, " + name;
    else
        greet.textContent = "Good night, " + name;

    time.textContent = hrs + ':' + min;
}