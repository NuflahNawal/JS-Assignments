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
//     document.write (a, "+", b, "+", c, "=", a + b + c + "<br><br>");
// }
// var num1 = Number(prompt ("Enter number"))
// var num2 = Number(prompt ("Enter number"))
// var num3 = Number(prompt ("Enter number"))
// sum (num1 , num2 , num3);


// QUESTION 4:
// function calculate (num1, num2, operator){
//     var operations = {
//         '+': (a,b) => a + b,
//         '-': (a,b) => a - b,
//         '*': (a,b) => a * b,
//         '%': (a,b) => a % b,
//         '/': (a,b) => (b === 0 ? "Error: Devision by zero is not allowed.": a/b) 
//     };
//     if (operations[operator]){
//         return operations[operator] (num1, num2);
//     } else{
//         return "Error: Invalid operator. Please use +, -, *, or %.";
//     }  
// }

// var number1 = +prompt ("Enter number in calculator")
//     var number2 = +prompt ("Enter number in calculator")
//     var op = prompt ('Enter "+" / "-" / "%" / "*" !');
//     var finalResult = calculate(number1,number2,op)

// document.write(`<h3>Calculation Result:</h3>`);
// document.write(`<p>${number1} ${op} ${number2} = <strong>${finalResult}</strong></p> <br><br>`);


// QUESTION  5:
function power (a,b){
    return a**b;
}
document.write(power(2,3));
document.write("<br><br>");


// QUESTION 6:
// function multiply (num) {
//     var result = 1
//     for (var i = 1; i <= num; i++) {
//         result = result * i
//     }
//     return result;
// }
// var user = prompt ("Enter a number for fraction")
// document.write(multiply(user))
// document.write("<br><br>")


// QUESTION 7:
// var start = Number(prompt ("Enter a starting number"))
// var end = Number(prompt ("Enter a ending number"))
// function counting (){
//     for (var i = start; i<= end; i++){
//         document.write (` ${i} `)
//     }
// } 
// counting ();


// QUESTION 8:
function formula (base , perpendicular) {
    function square (num) {
        return num * num
    }
    var sum = ((square(base) + square(perpendicular)) ** 0.5)
    return sum
}
var base = 3
var perpendicular = 4
document.write(`Hypotenuse for Base ${base} and Perpendicular ${perpendicular} = ${formula(base, perpendicular)} <br><br>`);


// QUESTION 9:
// function calculateArea (width , height){
//     var A = width * height
//     return A
// }
// var userWidth = prompt ("Enter width")
// var userHeight = prompt ("Enter heigth")
// document.write (`Area (using variables): ${calculateArea(userWidth, userHeight)} <br><br>`)


// QUESTION 10:
// function palindrome(str){
//     var reverse = ""
//     for(var i= str.length-1; i>=0; i--){
//         // document.write(str[i]);
//         reverse =reverse+str[i] //"ar"+m
//     }
//     console.log(str, reverse);
//     if(reverse===str){
//         document.write(str+" is a palindrome word");
//     }else{
//         document.write(str+" is not a palindrome word");
    
//     }
//     }
// var string = prompt("Enter a word").toLowerCase()
// palindrome(string)


// QUESTION 11:
