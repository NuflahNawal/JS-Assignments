// QUESTION 1:
function power (a,b){
    return a**b
}
console.log(power(3,7));


// QUESTION 2:
function leap (year){
    if (year % 400 || year % 4 && year !=100){
        console.log(`${year} is a leap year`);
    }else {
        console.log(`${year} is not a leap year`);
    }
}
leap (1700)


// QUESTION 3:
// function areaOfTriangle (a,b,c) {
//     var S = a + b + c / 2
//     var area = ((S * (S - a) * (S - b) * (S - c)) **  0.5)
//     return area
// }
// var user1 = +prompt ("Enter num1")
// var user2 = +prompt ("Enter num2")
// var user3 = +prompt ("Enter num3")
// console.log(areaOfTriangle(user1,user2,user3));


// QUESTION 4:
// function calculateAvarage (m1,m2,m3) {
//     // 
//     var avg = m1 + m2 + m3 / 3 
//     return avg
// }
// function calculatePercentage (m1,m2,m3){
//         var totalObtained = m1 + m2 + m3 
//         var percent = (totalObtained / 300) * 100
//         return percent
// }
// function mainfunction () {
//     var m1 = +prompt ("Enter english marks")
//     var m2 = +prompt ("Enter math marks")
//     var m3 = +prompt ("Enter urdu marks")

//     var avgResult = calculateAvarage(m1,m2,m3)
//     var percentResult = calculatePercentage(m1,m2,m3)

//     console.log(`Avarage: ${Math.floor(avgResult)}`);
//     console.log(`Percentage: ${percentResult}`);
// }
// mainfunction();


// QUESTION 5:
function myIndexOf (str, chr) {
    for (var i = 0; i < str.length; i++) {
        var element = str[i];
        if (element === chr) {
            return i
        }
    }
    return -1
}
console.log(myIndexOf("javascript" , "s"));
console.log(myIndexOf("code" , "s"));
console.log(myIndexOf("name" , "e"));


// QUESTION 6:
