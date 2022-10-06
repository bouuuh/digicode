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

let table = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
function randomDiv(){
    let random = Math.floor(Math.random()*table.length);
    let value = table[random];
    console.log(value);
    one.innerText = value;
};
randomDiv();

//https://askcodez.com/comment-rendre-aleatoire-shuffle-un-tableau-javascript.html