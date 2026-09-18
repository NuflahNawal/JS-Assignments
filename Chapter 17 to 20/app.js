// QUESTION 1 , 2
var arr = [[0 , 1 , 2 , 3], [1 , 0 , 1 , 2], [2 , 1 , 0 , 1]]
document.write(arr[0][0] , arr [0][1] , arr [0][2] , arr [0][3] + "<br>")
document.write(arr[1][0] , arr [1][1] , arr [1][2] , arr [1][3] + "<br>")
document.write(arr[2][0] , arr [2][1] , arr [2][2] , arr [2][3] + "<br> <br>")

// QUESTION 3
for (var i=1; i<=10; i++){
    document.write(i + "<br>")
}

// QUESTION 4
// var num = prompt ("Enter a number for table!") || 5
// var multiple = prompt ("Enter a number for multiples") ||10

// for (var i=1; i<= multiple; i++){
//     document.write(`${num} x ${i} = ${num*i} <br>`)
// }

// QUESTION 5
var arr = [" Apple" , "Banana" , "Mango" , "Orange" , "Strawberry"]
document.write(`${arr [0]} <br> ${arr [1]} <br> ${arr[2]} <br> ${arr [3]} <br> ${arr [4]} <br><br>`)


// QUESTION  6
// COUNTING
for(var i=1; i<=10; i++){
document.write(i + "<br>")
}

// REVERSE COUNTING
for( var i=10; i>=0; i--){
document.write(i + "<br>")
}

// EVEN
for( var i=0; i<=10; i+=2){
document.write(i )
}

// ODD
for( var i=0; i<=10; i++){
    i++
document.write("<br>" + i )
}

// SERIES
for( var i=2; i<=20; i+=2){
document.write("<br>" + i +  "K" )
}

// QUESTION 7
var arr = ["cake" , "apple pie" , "cookie" , "chips" , "patties"]

var user = prompt ("What do you want to order?")

var flag = false 
for (var i = 0; i <arr.length; i++){
    if (user == arr[i]){
        alert (user + " is avaliable in our bakery")
        flag = true
    }}
if (flag == false) {
    alert ("We are sorry " + user + " isn't avaliable in our bakery")
}

// QUESTION 8
var arr = [24 , 53 , 78 , 91 , 12]
for (var i = 0; i <arr.length; i++)


// QUESTION 9



// QUESTION 10
for( var i=5; i<=100; i+=5){
    document.write("<br>" + i)
}