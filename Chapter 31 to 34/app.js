// QUESTION 1:
var currentTime = new Date ()
document.write (`${currentTime} <br><br>`)


// QUESTION 2:
var today = new Date ()
var month = today.getMonth()
var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var getMonth = monthName[month]
alert ("Current month: " + getMonth)


// QUESTION 3:
var today = new Date ();
var weeks = today.getDay();
var weeksName = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
var getWeek = weeksName[weeks];
document.write (`Today is ${getWeek} <br><br>`)


// QUESTION 4:
var currentDay = new Date ().getDay();
if (currentDay === 0 || currentDay === 6){
    alert ("It's Fun Day")
    document.write ("It's Fun Day" +" <br><br>")
}


// QUESTION 5:
var month = new Date ().getDate();
if (month < 16){
    document.write ("First fifteen days of the month" + "<br><br>");
}else {
    document.write ("Last days of the month" + "<br><br>");
}


// QUESTION 6:
var today = new Date ();
var milli = Math.floor(today.getTime()/ 60000);

document.write (`Current Date: ${today} <br>`);
document.write (`Milliseconds since january 1, 1970: ${milli} <br><br>`);


// QUESTION 7:
var currentHour = new Date ().getHours ();
if (currentHour < 12){
    alert ("It's AM")
}else {
    alert ("It's PM")
}


// QUESTION 8:
var laterDate = new Date (2020, 11, 31)
document.write (`Later Date: ${laterDate} <br><br>`)


// QUESTTION 9:
var ramdan = new Date (2015, 5, 18);
var today = new Date ();

var diffInMilliseconds = today.getTime() - ramdan.getTime();

var daysPast = Math.floor(diffInMilliseconds / (1000 * 60 *  60 * 24));

alert (`${daysPast} days have passed since 1st Ramadan (June 18, 2015)`)


// QUESTION 10:
var startTime2015 = new Date ('2015-01-01T00:00:00Z');
var secondsElapsed = startTime2015.getTime() / 1000;

document.write (`${secondsElapsed} seconds had passed since beginning of 2015 <br><br>`)


// QUESTION 11:
var today = new Date ();
var currentDate = new Date ();
var currentsHours = currentDate.getHours();
currentDate.setHours(currentsHours - 1);

document.write ("Current Date:" + today + "<br>");
document.write("Updated Date and Time: " + currentDate.toString() + "<br><br>");


// QUESTION 12:
var today = new Date ();
var currentDate = new Date ();
var currentYear = currentDate.getFullYear();
currentDate.setFullYear(currentYear - 100);

document.write ("Current Date:" + today + "<br>");
document.write("100 year back, it was  " + currentDate + "." + "<br><br>");


// QUESTION 13:
var userAge = +prompt ("Enter your age")
var currentYear = new Date ().getFullYear();
var birthYear = currentYear - Number(userAge);

document.write (`Your age ${userAge} <br>`);
document.write (`Your birth year: ${birthYear} <br><br>`);


// QUESTION 14:
var cutomerName = "Imama Hashim";
var currentMonth = "October";
var numberOfUnit = 410;
var chargesPerUnit = 16;
var latePaySurcharge = 350;
var netAmountPayment = numberOfUnit * chargesPerUnit;
var grossAmountPayable = netAmountPayment +latePaySurcharge

document.write ("<h2> K-Electric Bill </h2>");
document.write("<p><b>Customer Name:</b> " + cutomerName + "</p>");
document.write("<p><b>Current Month:</b> " + currentMonth + "</p>");
document.write("<p><b>Number of units:</b> " + numberOfUnit + "</p>");
document.write("<p><b>Charges per unit:</b> " + chargesPerUnit.toFixed(2) + "</p>" + "<br>");
document.write("<p><b>Net Amount Payable (within Due Date):</b> " + netAmountPayment.toFixed(2) + "</p>");
document.write("<p><b>Late Payment Surcharge:</b> " + latePaySurcharge.toFixed(2) + "</p>");
document.write("<p><b>Gross Amount Payable (after Due Date):</b> " + grossAmountPayable.toFixed(2) + "</p>");
