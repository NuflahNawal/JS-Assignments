// QUESTION 1:
// var firstName = prompt ("Enter your first Name")
// var lastName = prompt ("Enter your last Name")
// var fullName = firstName + " " + lastName;

// alert ("Hello " + fullName + "!" + " Welcome!")


// QUESTION 2:
// var user = prompt ("Enter your favorite Mobile model")
// var inputLenght = user.length;

// document.write (`My favorite mobile model is: ${user} <br> Lenght of String: ${inputLenght} <br>`)

// QUESTION 3:
var word = ("Pakistan")
var find = word.indexOf("n")
document.write ("String: " + word + "<br>")
document.write ("Index of 'n': " + find + "<br><br>")

// QUESTION 4:
var word = ("Hello World")
var find = word.lastIndexOf("l")
document.write ("String: " + word + "<br>")
document.write ("Last index of 'l': " + find + "<br><br>")

// QUESTION 5:
var  word = ("Pakistani")
var find = word.charAt("3")
document.write ("String: " + word + "<br>")
document.write ("Character at index 3: " + find + "<br><br>")

// QUESTION 6:
// var firstName = prompt ("Enter your first Name")
// var lastName = prompt ("Enter your last Name")
// var fullName = firstName.concat(" " + lastName)

// alert ("Hello " + fullName + "!" + " Welcome!")

// QUESTION 7:
var city = ("Hydrabad")
var replace = city.replace("Hydr", "Islam")
document.write ("City: " + city + "<br>")
document.write ("After replacement: " + replace + "<br><br>")

// QUESTION 8:
var massage = ("Japan[a] is an island country in East Asia. Located in the Pacific Ocean off the northeast coast of the Asian mainland, it is bordered to the west by the Sea of Japan, the Sea of Okhotsk in the north, and the East China Sea in the south. The Japanese archipelago consists of four major islands alongside over 14,000 smaller islands. Japan is divided into 47 administrative prefectures and eight traditional regions, and around 75% of its terrain is mountainous and heavily forested, concentrating its agriculture and highly urbanized population along its eastern coastal plains. With a population of almost 123 million as of 2026, it is the world's 11th most populous country. Tokyo is the country's capital and largest city.")
var replceAll = massage.replaceAll(/and/g , "<b>&</b>") 

document.write (`Original: ${massage} <br>`)
document.write (`Original: ${replceAll} <br> <br>`)

// QUESTION 9:
var string = ("472")
var number = Number(string)

document.write (`valye: ${string} <br>`)
document.write (`Type: ${typeof(string)} <br><br>`)

document.write (`valye: ${number} <br>`)
document.write (`Type: ${typeof(number)} <br><br>`)


// QUESTION 10:
// var userInput = prompt ("Enter a fruit name!")
// var updatedVersion = userInput.toUpperCase()

// document.write ("User input: " + userInput + "<br>")
// document.write ("Upper Case: " + updatedVersion + "<br><br>")


// QUESTION 11:
// var userInput = prompt ("Enter a string!")

// if (userInput){
//     let result = userInput.charAt(0).toUpperCase() + userInput.slice(1);

//     document.write ("User input: " + userInput + "<br>")
//     document.write ("Title Case: " + result + "<br><br>")
// }


// QUESTION 12:
// var num = 35.36;
// var string = num.toString().replace(".","")

// document.write (`Number: ${num} <br>`)
// document.write (`String: ${string} <br><br>`)


// QUESTION 13:
// var username = prompt ("Enter username!")
// var valid = true

// for (var i=0; i < username.length; i++){
//     var charCode = username.charCodeAt(i)

//     if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64){
//         valid = false;
//         break;
//     }
// }

// if (valid) {
//     alert ("Username  is valid")
// }else {
//     alert("Please enter a valid username without special symbols [@ . , !]");
// }


// QUESTION 14:
// var A = ["cake" , "applepie" , "cookie" , "chips" , "patties"]
// var user = prompt ("Welcome to my Bakery. What do you want to order sir/ma'am?")

// var search = user.toLowerCase()
// var isFound = false;
// var index = -1;

// for (var i = 0; i < A.length; i++){
//     if(A[i].toLowerCase() === search){
//         isFound = true
//         index = i
//         break;
//     }
// }

// if (isFound) {
//     document.write (user + " is avaliable at index " + index + " in our bakery.")
    
// }else {
//     document.write ("We are Sorry " + user + " is not avaliable" + "in our bakery.")
// }

// QUESTION 15:
// var password = prompt ("Enter your password!      a) Password must contain contain alphabets and numbers      b) It should not start with a number     c) It must at least 6 characters long")
// var alpha = false
// var num = false
// var char = true
// var isLong = password.length >= 6;

// var firstChar = password.charCodeAt(0)
// if (firstChar >= 48 && firstChar <= 57){
//     char =false
// }

// for (var i = 0; i < password.length; i++){
//     var code = password.charCodeAt(i);

//     if ((code >= 65 && code <= 90) ||(code >= 97 && code <= 122)){
//         alpha = true;
//     }else if (code >= 48 && code <= 57){
//         num = true
//     }
// }

// if (isLong && firstChar && alpha && num){
//     document.write ("Entered password: " + password + "<br>")
//     alert ("Password is valid!")
// }else {
//     document.write ("Entered password: " + password + "<br>")
//     if (!firstChar){
//         document.write ("Password can not begin with number <br>")
//     }
//     if (!isLong){
//         document.write ("Password must be atleast 6 character long  <br>")
//     }
//     if (!alpha || num){
//         document.write ("Password must not contain both alphabat and number  <br>")
//     }
//     alert ("Please enter a valid password.")
// }

// QUESTION 16:
