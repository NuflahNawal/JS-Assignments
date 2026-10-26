var span = document.getElementById("number")
var count = Number(span.innerText)
console.log(span , count);

function increment () {
    count = count + 1
    console.log(count);
    span.innerText = count
}

function discrement () {
    count = count - 1
    console.log(count);
    span.innerText = count
}

function save () {
    console.log(`Save value ${count}`);
    
}

function reset () {
    count = 0
    span.innerText = count

}