// QUESTION 1:
var user = +prompt ("Enter positive integer")
var num = (user)
var roundOff = Math.round(user)
var floorOff = Math.floor(user)
var ceilOff = Math.ceil(user)
document.write (`Number: ${num} <br>`)
document.write (`Round Off: ${roundOff} <br>`)
document.write (`Floor Off: ${floorOff} <br>`)
document.write (`Ceil Off: ${ceilOff} <br><br>`)

// QUESTION 2:
var user = +prompt ("Enter negetive integer")
var num = (user)
var roundOff = Math.round(user)
var floorOff = Math.floor(user)
var ceilOff = Math.ceil(user)
document.write (`Number: ${num} <br>`)
document.write (`Round Off: ${roundOff} <br>`)
document.write (`Floor Off: ${floorOff} <br>`)
document.write (`Ceil Off: ${ceilOff} <br><br>`)

// QUESTION 3:
var num = -5
var absValue = Math.abs(num)
document.write(`Absolute value of -5 is ${absValue} <br><br>`)

// QUESTION 4:
var dice = (Math.random()*4) +1
document.write(`Random dice value = ` + Math.round(dice) + "<br>")
var dice2 = (Math.random()*5) +1
document.write(`Random dice value = ` + Math.round(dice2) + "<br><br>")

// QUESTION 5:
var coin = (Math.random()*2)
var tossed = Math.floor(coin) +1;
console.log(tossed);
if (tossed === 1) {
    document.write("Heads" + "<br><br>")
}else if (tossed === 2) {
    document.write ("Tails" + "<br><br>")
}

// QUESTION 6:
var random = Math.random()
var randomNum = Math.floor(Math.random()*100) +1
document.write(`Random number between 1 to 100: ${randomNum} <br><br>`)

// QUESTION 7:
var user = prompt ("Enter your weight")
var weight = parseInt(user)
document.write (`The weight of user is ${weight} kilograms <br><br>`)

// QUESTION 8:
var secret = 8
var userInput = prompt ("Enter a number between 1 to 10")
if (userInput == secret) {
    alert ("Congratulate 🥳🎉")
} else {
    alert ("😢 Try again!")
}