// QUESTION 1
var studentNameForFuture = []
document.write (studentNameForFuture)

// QUESTION 2
var studentNameForFuture = new Array ();
document.write (studentNameForFuture)

// QUESTION 3
var developer = ["Faiza" , "Nuflah" , "Unzila" + "<br>"]
document.write (developer)

// QUESTION 4
var number = [20000 , 10000 , 50000 + "<br>"]
document.write (number)

// QUESTION 5
var boolaen = [true , false , true, false + "<br>"]
document.write (boolaen)

// QUESTION 6
var mixed = ["Nuflah", 20 , null , true + "<br>"]
document.write(typeof mixed);

// QUESTION 7
var qualifications = ["SSC" , "HSC" , "BCS" , "BS" , "BCOM" , "MS" , "M.Phil" , "PHD"]

document.write (`<h1> Qualification: </h1> 
    ${qualifications[0]} <br>
    ${qualifications[1]} <br> ${qualifications[2]} <br> ${qualifications[3]} <br> ${qualifications[4]}  <br> ${qualifications[5]}  <br> ${qualifications[6]}  <br> ${qualifications[7]} <br><br>`)

// QUESTION 8
var student = ["Aysha" , "Fiza" , "Laiba"]
var score = [350 , 400 , 450]
var Percentage = (score[0] / 500 * 100) 
var Percentage1 = (score[1] / 500 * 100) 
var Percentage2 = (score[2] / 500 * 100) 

document.write(`Score of ${student[0]} is ${score[0]}. Percentage: ${Percentage}% <br> `)
document.write(`Score of ${student[1]} is ${score[1]}. Percentage: ${Percentage1}% <br> `)
document.write(`Score of ${student[2]} is ${score[2]}. Percentage: ${Percentage2}% <br><br> `) 

// QUESTION 9
// var color = [ " Gray " , " Pink " , " White " , " Purple " + "<br>" ]
// document.write (color)
// var userColor = prompt ("What color you want to add at start?")
// document.write (`${userColor} , ${color}`)

// // var color = [ " Gray " , " Pink " , " White " , " Purple " + "<br>" ]
// color.unshift (" Blue " , " Black " )
// document.write (color)

// color.shift (color)
// document.write (color)

// color.pop (color)
// document.write (color + "<br>")

// var index = prompt ("In which index you wish to add color? (0 , 1 , 2 , 3 , 4")
// var colorName = prompt ("Which color you wish to add?")

// index = Number(index);

// color.splice (index, colorName)
// document.write (`<b> ${colorName} , </b> ${color} <br>`)

// var index = prompt ("Which index you wish to delete?")
// var deleteCount = prompt ("How many color you want to delete?")

// index = Number(index);
// deleteCount = Number(deleteCount);

// color.splice (index , deleteCount)

// document.write (`<b> ${deleteCount} , </b> ${color}`)

// QUESTION 10
var studentScore = [ 400 , 300 , 380 , 350 , 340 , 320 ]
studentScore.sort ()
document.write (`<b> ${studentScore} <b> <br><br>`)

// QUESTION 11
var cities = [ " Karachi " , " Lahore " , " Islamabad " , " Peshawar " , " Quetta " ]
document.write (`Cities: ${cities} <br>`)

var selectedCities = [ " Islamabad " , " Peshawar " , " Quetta " ]
document.write (`Selected Cities: ${selectedCities} <br><br>`)

// QUESTION 12
var arr = ["This ", " is ", " my ", " cat"]; 
var singleString = arr.join("");

document.write (`<h3> ${singleString} </h3>`)