// QUESTION 1

// var city = prompt ("Write a city name:")
// if (city === "karachi") {
//     alert ("Welcome to the city of lights!")
// } else if (city) {
//     alert ("Welcome!")
// }

// QUESTION 2

// var Gender = prompt ("What is you gender?")
// if (Gender === "male") {
//     alert ("Good Morning Sir!")
// } else if (Gender === "female") {
//     alert ("Good Morning Ma'am!")
// }

// QUESTION 3

// var traffic = prompt ("write a color name to understand traffic light")
// if (traffic === "Red") {
//     alert ("Must Stop!")
// } else if (traffic === "Yellow") {
//     alert ("Ready to move!")
// } else if (traffic === "Green") {
//     alert ("Move now!")
// }

// QUESTION 4

// var fuel = prompt ("Tell the remaining car fuel (in litres)")
// if (fuel <= 0.25) {
//     alert ("Please refill the fuel in your car")
// } else {
//     alert ("You have enough Fuel")
// }

// QUESTION 5

var a = 4;
if (++a === 5) {
    alert ("Given condition for variable a is true");
}

var b = 82;
if (b++ === 83) {
    alert ("Given condition for variable b is true")
} 

var c = 12;
if (c++ === 13) {
    alert ("Condition 1 is true")
} 
if (c === 13) {
    alert ("Condition 2 is true")
}
if (++c < 4) {
    alert ("Condition 3 is true")
}
if (c === 14) {
    alert ("Condition 4 is true")
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
    alert ("The cost equals")
}

if (true) {
    alert("True")
}
if (false) {
    alert ("False")
}

if ("car" < "cat"){
    alert ("car is smaller the cat")
}

// QUESTION 6

let subject1 = Number(prompt("Enter marks for Subject 1:"));
let subject2 = Number(prompt("Enter marks for Subject 2:"));
let subject3 = Number(prompt("Enter marks for Subject 3:"));
let totalMarks = Number(prompt("Enter total marks (e.g., 300):"));


let marksObtained = subject1 + subject2 + subject3;
let percentage = (marksObtained / totalMarks) * 100;


let grade = "";
let remarks = "";
if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
} else if (percentage >= 60) {
    grade = "B";
     remarks = "You need to improve";
} else {
    grade = "Fail";
    remarks = "Sorry";
}

document.write("<h1>Marks Sheet</h1>");
document.write("Total marks: " + totalMarks + "<br>");
document.write("Marks obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage + "%<br>");
document.write("Grade: " + grade + "<br>");
document.write("Remarks: " + remarks + "<br>")