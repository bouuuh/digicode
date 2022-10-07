let star = document.querySelector(".star");
let result = document.querySelector(".result");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");
let zero = document.querySelector(".zero");
let hashtag = document.querySelector(".hashtag");

star.addEventListener("click", function() {
    result.innerText += star.innerText;
});
one.addEventListener("click", function() {
    result.innerText += one.innerText;
});
two.addEventListener("click", function() {
    result.innerText += two.innerText;
});
three.addEventListener("click", function() {
    result.innerText += three.innerText;
});
four.addEventListener("click", function() {
    result.innerText += four.innerText;
});
five.addEventListener("click", function() {
    result.innerText += five.innerText;
});
six.addEventListener("click", function() {
    result.innerText += six.innerText;
});
seven.addEventListener("click", function() {
    result.innerText += seven.innerText;
});
eight.addEventListener("click", function() {
    result.innerText += eight.innerText;
});
nine.addEventListener("click", function() {
    result.innerText += nine.innerText;
});
zero.addEventListener("click", function() {
    result.innerText += zero.innerText;
});
hashtag.addEventListener("click", function() {
    result.innerText += hashtag.innerText;
});

function nbRandomInDiv() {
//on crée un tableau vide
let randomNumbers = [];

//on met les chiffres randoms qui devront être différents dans un tableau
for (let i = 0; i < 100; i++) {
//calcul d'un chiffre entre 0 et 9
let nbRandom = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
if (randomNumbers.includes(nbRandom)) {
        
} else {
    randomNumbers.push(nbRandom);
        
    }
};
one.innerText = randomNumbers[0];
two.innerText = randomNumbers[1];
three.innerText = randomNumbers[2];
four.innerText = randomNumbers[3];
five.innerText = randomNumbers[4];
six.innerText = randomNumbers[5];
seven.innerText = randomNumbers[6];
eight.innerText = randomNumbers[7];
nine.innerText = randomNumbers[8];
zero.innerText = randomNumbers[9];
console.log(result.innerText);
if(result.innerText === "1234"){
    result.style.background = "green";
}
else if (result.innerText.length === 4){
    result.style.background = "red";
}
else if (result.innerText.length === 5){
    result.innerText = "";
    result.style.background = "#593f62"
}
};

nbRandomInDiv();
one.addEventListener("click", nbRandomInDiv);
two.addEventListener("click", nbRandomInDiv);
three.addEventListener("click", nbRandomInDiv);
four.addEventListener("click", nbRandomInDiv);
five.addEventListener("click", nbRandomInDiv);
six.addEventListener("click", nbRandomInDiv);
seven.addEventListener("click", nbRandomInDiv);
eight.addEventListener("click", nbRandomInDiv);
nine.addEventListener("click", nbRandomInDiv);
zero.addEventListener("click", nbRandomInDiv);



