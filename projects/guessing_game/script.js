const num = Math.floor(Math.random() * Math.floor(100));
console.log(num);
let guesses = [];
let hintsGiven = 6;
let givenHintAlready = false;

function getGuess() {
    givenHintAlready = false;
    let guess = parseInt(document.getElementById("new_guess").value);
    if (isNaN(guess)) {
        alert("Not a number! Submit a number between 1 and 100.");
    }
    else if (guess >= 100 || guess < 1) {
        alert("Your guess should be between 1 and 100.");
    }
    else {
        if (guess === num) {
            youWin();
        }
        else if (guesses.includes(guess)) {
            alert(`You have already guessed ${guess} before. Try a different number.`);
        }
        else {
            document.getElementById('hint').innerHTML = "";
            guesses.push(guess);
            let guessesRemaining = 5 - guesses.length;
            if (guessesRemaining > 0) {
                document.getElementById("remain").innerHTML = `You have ${guessesRemaining} guesses remaining.`;
                let str = "You have guessed: <ul>";
                for (let prevGuess of guesses) {
                    str += `<li>${prevGuess}</li>`;
                }
                document.getElementById("guessed").innerHTML = str + "</ul>";
            }
            else {
                youLose();
            }
        }
    }
    
}

function giveHint() {
    givenHintAlready = true;
    let hintPara = document.getElementById('hint');
    switch(hintsGiven){
        case 6:
            if (num > 50) {
                hintsGiven--;
                hintPara.innerHTML = `The number is above 50.`;
                break;
            }
            else if (num < 50) {
                hintsGiven--;
                hintPara.innerHTML = "The number is below 50.";
                break;
            }
            else {
                //continue if num == 50
            }
        case 5: 
            hintsGiven--;
            if (num % 2 === 0) {
                hintPara.innerHTML = "The number is even.";
                break;
            }
            else {
                hintPara.innerHTML = "The number is odd.";
                break;
            }
        case 4:
            hintsGiven--;
            if ([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199].includes(num)) {
                hintPara.innerHTML = "The number is prime.";
                break;
            }
            else if (num % 2 === 0) {
                let div3 = (num % 3 === 0)
                let not = "";
                if (!(div3)) not = "not";
                hintPara.innerHTML = `The number is ${not} divisible by 3.`;
                break;
            }
            else {
                hintPara.innerHTML = "The number is not prime.";
                break;
            }
        case 3:
            hintsGiven--;
            if (num > 10){
                hintPara.innerHTML = `The ones digit is ${num % 10}.`;
                break;
            }
            else {
                hintPara.innerHTML = `The number is a single digit number.`;
                break;
            }
        case 2: 
            hintsGiven--;
            let multiplier = (Math.floor(Math.random() * Math.floor(3))) + 1;
            let adder = Math.floor(Math.random() * Math.floor(25));
            hintPara.innerHTML = `Solve for n: ${multiplier}n + ${adder} = ${multiplier * num + adder}`;
            break;
        case 1: 
            hintsGiven--;
            multiplier = (Math.floor(Math.random() * Math.floor(3))) + 1;
            adder = Math.floor(Math.random() * Math.floor(25));
            hintPara.innerHTML = `Here's another one! Solve for n: ${multiplier}n + ${adder} = ${multiplier * num + adder}`;
            break;
            
    }

}

function youWin() {
    let content = document.getElementById('content');
    content.innerHTML = `<h2> Yes! The number was ${num}. </h2> <br> <p style="font-size: 50px">🎉🎉🎉</p> <p style="font-size: 12px"> You can refresh to play again.</p>`;
    //console.log(content);
}

function youLose() {
    let content = document.getElementById('content');
    content.innerHTML = `<h2> Sorry, that was incorrect and that was your final guess! The number was ${num}. </h2> <br> <p style="font-size: 50px">😞😞😞</p> <p style="font-size: 12px"> You can refresh to play again.</p>`;
    //console.log(content);
}

document.getElementById('submit_guess').addEventListener('click', getGuess);
document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        getGuess();
      }
});
document.getElementById('gimme_hint').addEventListener('click', () => {
    if (givenHintAlready) {
        document.getElementById('hint').innerHTML += "<br>Make a guess before requesting a new hint."
    }
    else {
        giveHint();
    }
});