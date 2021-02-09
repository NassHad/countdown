const button = document.getElementById('countdown-button');
const countDownEl = document.getElementById('countdown');

button.addEventListener('click', getInputValue);

function getInputValue(){
    for (let i = 1; i <= 9999; i++) // Clear all the intervals
        window.clearInterval(i);    // that are already set.

    let choice = document.getElementById('choice');
    let time = 0;
    if(isNaN(choice.value)){ // If it's not a number
        alert('Entrez un nombre tout de suite !!!')
    }else{
        time = choice.value * 60;
        choice.value = "";
        setInterval(updateCountdown, 1000); // Set the interval every 1 second

        function updateCountdown(){
            let minutes = Math.floor(time/60);
            let seconds = time % 60;
            minutes = minutes < 10 ? '0' +minutes : minutes; // Put a 0 before if the number is less than 10
            seconds = seconds < 10 ? '0' +seconds : seconds; // Put a 0 before if the number is less than 10
            countDownEl.innerHTML = `${minutes} : ${seconds}`;
            (time > 0 ) ? time-- : countDownEl.innerHTML = 'IT\'S OVER'; // Stop when it reaches 0
        }
    }
}

