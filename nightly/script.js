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
    if (hrs >= 0 && hrs < 6) // night
        greet.innerHTML = "Good night, " + name;
    else if (hrs >= 6 && hrs < 12) // morning
        greet.innerHTML = "Good morning, " + name;
    else if (hrs >= 12 && hrs < 18) // afternoon
        greet.innerHTML = "Good afternoon, " + name;
    else if (hrs >= 18 && hrs < 24) // evening
        greet.innerHTML = "Good evening, " + name;
    else
        greet.innerHTML = "Hello, " + name;

    time.textContent = hrs + ':' + min;
}