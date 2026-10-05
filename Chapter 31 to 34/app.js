// QUESTION 1:
var currentTime = new Date ()
document.write (`${currentTime} <br><br>`)


// QUESTION 2:
// var today = new Date ()
// var month = today.getMonth()
// var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// var getMonth = monthName[month]
// alert ("Current month: " + getMonth)


// QUESTION 3:
var today = new Date ();
var weeks = today.getDay();
var weeksName = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
var getWeek = weeksName[weeks];
document.write (`Today is ${getWeek} <br><br>`)


// QUESTION 4:
// var currentDay = new Date ().getDay();
// if (currentDay === 0 || currentDay === 6){
//     alert ("It's Fun Day")
//     document.write ("It's Fun Day" +" <br><br>")
// }


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
// var currentHour = new Date ().getHours ();
// if (currentHour < 12){
//     alert ("It's AM")
// }else {
//     alert ("It's PM")
// }


// QUESTION 8:
var laterDate = new Date (2020, 11, 31)
document.write (`Later Date: ${laterDate} <br><br>`)


// QUESTTION 9:
// var ramdan = new Date (2015, 5, 18);
// var today = new Date ();

// var diffInMilliseconds = today.getTime() - ramdan.getTime();

// var daysPast = Math.floor(diffInMilliseconds / (1000 * 60 *  60 * 24));

// alert (`${daysPast} days have passed since 1st Ramadan (June 18, 2015)`)


// QUESTION 10:
