let terms = [];
let variables = ["x", "y", "x<sup>2</sup>", "xy", "x<sup>2</sup>y", "y<sup>2</sup>", "x<sup>3</sup", "x<sup>2</sup>y<sup>2</sup", "xyz", "xy<sup>2</sup>"];
let randomIndices = [];
let first = "";
let findingSecond = false;

function generateRandom(min, max) {
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

for (let i = 0; i < 8; i++) {
    randomIndices.push(generateRandom(0,5));
}

console.log(randomIndices);

for (let i = 0; i < 16; i++) {
    terms.push( `${generateRandom(1, 15)} ${variables[randomIndices[Math.floor(i/2)]]}`)
}

console.log(terms);

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
}

shuffle(terms);
console.log(terms);

function handler(e){
    e.stopPropagation();
    e.preventDefault();
}

function flip(e) {
    if (first != e.target) {
        
    console.log(e.target.innerHTML);
    e.target.innerHTML = terms[parseInt(e.target.id)];
    e.target.style.background = "cornflowerblue";
    if (!(findingSecond)) {
        first = e.target;
        console.log(first);
        findingSecond = true;
    }
    else {
        if (terms[parseInt(e.target.id)].split(" ")[1] === terms[parseInt(first.id)].split(" ")[1] ) {
            console.log("match!");
            e.target.style.background = "lightgreen";
            first.style.background = "lightgreen";
            /*
            document.addEventListener('click', handler, true);
            document.getElementById('popup').style.visibility = "visible";
            document.getElementById('expression').innerHTML = `${terms[parseInt(e.target.id)]} + ${terms[parseInt(first.id)]} = ? `;
            */
        } 
        else {
            document.addEventListener('click', handler, true);
            setTimeout(function() {
                e.target.innerHTML = "";
                first.innerHTML = "";
                e.target.style.background = "cadetblue";
                first.style.background = "cadetblue";
                document.removeEventListener('click', handler, true);
            }, 1500);
            
        }
        findingSecond = false;
    }
}
}

[].forEach.call( document.getElementsByClassName('card'), item => item.addEventListener("click", flip));

