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
