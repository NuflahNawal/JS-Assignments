// QUESTION 1:
function greetUser (user) {
    var greet = "Hello, " + user + "!"
    alert (greet)
}

// QUESTION 2:
function showThanks (phoneName) {
    var thanks = "Thank you, for buying" + phoneName + "from us" + "!"
    alert (thanks);
}

// QUESTION 3:
function deleteBox (e) {
    console.log(e.parentNode.parentNode);
    var row = e.parentNode.parentNode
    row.remove()
}

// QUESTION 5:
var span = document.getElementById("number")
var count = Number(span.innerText)

console.log(span,count);

function increment (){
    count = count + 1
    console.log(count);
    span.innerText = count
}
function decrement (){
    count = count - 1
    console.log(count);
    span.innerText = count
}