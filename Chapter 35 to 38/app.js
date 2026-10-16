// QUESTION 1:
function date () {
    var today = new Date ()
    var formatDateTime = today.toLocaleString();
    document.write (`Current time and date ${formatDateTime} <br><br>`)
} 
date();


// QUESTION 2:
// function greet () {
//     var firstName = prompt ("Enter your first Name")
//     var lastName = prompt ("Enter your last Name")
//     alert (`Hello! Welcome ${firstName} ${lastName}!`)
// }
// greet ();


// QUESTION 3:
// function sum (a,b,c) {
//     document.write (a, "+", b, "+", c, "=", a + b + c);
// }
// var num1 = Number(prompt ("Enter number"))
// var num2 = Number(prompt ("Enter number"))
// var num3 = Number(prompt ("Enter number"))
// sum (num1 , num2 , num3);

 
// QUESTION 10:
function palindrome(str){
    var reverse = ""
    for(var i= str.length-1; i>=0; i--){
        // console.log(str[i]);
        reverse =reverse+str[i] //"ar"+m
    }
    console.log(str, reverse);
    if(reverse===str){
        console.log(str+" is a palindrome word");
    }else{
        console.log(str+" is not a palindrome word");
    
    }
    }
    var string = prompt("Enter a word").toLowerCase() //Umra
    palindrome(string)