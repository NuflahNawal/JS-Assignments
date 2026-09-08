// QUESTION 1

var a = 10 
document.write ("The value of a is: " + a + "<br>" + "<br>")

a++
document.write ("The value of ++a is: " + a + "<br>")
document.write ("Now the value of a is: " + a + "<br>" + "<br>")

// a++
document.write ("The value of a++ is: " + a++ + "<br>")
document.write ("Now the value of a is: " + a + "<br>" + "<br>")

a--
document.write ("The value of --a is: " + a + "<br>")
document.write ("Now the value of a is: " + a + "<br>" + "<br>")

// a--
document.write ("The value of a-- is: " + a-- + "<br>")
document.write ("Now the value of a is: " + a + "<br>" + "<br>" + "<br>")

// QUESTION 2

var a = 2, b = 1;

document.write ("a is " + a + "<br>")
document.write ("b is " + b + "<br>")

var result = --a - --b + ++b + b--;
document.write ("result is " + result + "<br>" + "<br>" + "<br>")

// QUESTION 3

var username = prompt ("Please enter your name:")
if (username) {
    alert ("Hello, " + username + " Welcome!")
} else {
    alert ("Hello Welcome!")
}

// QUESTION 4

var userInput = prompt("Enter a number for multiplication table:");

var num = (userInput);

document.write("<h2>Multiplication Table of " + num + "</h2>");

for ( var table =1; table <= 10; table++) {
    document.write ( num + " x " + table + " = " + (num * table) + "<br>" + "<br>")
}

// QUESTION 5

var subject1 = prompt ("Enter first subject name:")
var subject2 = prompt ("Enter second subject name:")
var subject3 = prompt ("Enter third subject name:")


var TMPS = 100;

var marks1 = prompt("Enter obtained marks for " + subject1 + ":");
var marks2 = prompt("Enter obtained marks for " + subject2 + ":");
var marks3 = prompt("Enter obtained marks for " + subject3 + ":")


var totalObtained = marks1 + marks2 + marks3;
var grandeTotal = TMPS * 3;

var percentage1 = (marks1 / TMPS) * 100;
var percentage2 = (marks2 / TMPS) * 100;
var percentage3 = (marks3 / TMPS) * 100;

var overallPercentage = (totalObtained / grandeTotal) * 100;

document.write("<table border='1' cellspacing='0' cellpadding='8'>");

document.write("<tr><th> Subject </th><th> Total Marks </th><th> Obtained Marks </th><th> Percentage </th></tr>");

document.write("<tr><td>" + subject1 + "</td><td>" + TMPS + "</td><td>" + marks1 + "</td><td>" + percentage1 + "%</td></tr>");

document.write("<tr><td>" + subject2 + "</td><td>" + TMPS + "</td><td>" + marks2 + "</td><td>" + percentage2 + "%</td></tr>");

document.write("<tr><td>" + subject3 + "</td><td>" + TMPS + "</td><td>" + marks3 + "</td><td>" + percentage3 + "%</td></tr>");


document.write("<tr><th> Total </th><th>" + grandeTotal + "</th><th>" + totalObtained + "</th><th>" + overallPercentage + "%</th></tr>");