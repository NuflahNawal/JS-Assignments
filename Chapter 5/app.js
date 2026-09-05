var num1 = 50 
var num2 = 80
var add = num1+num2
console.log(num1, "+", num2, "=", add);
document.write(num1, "+", num2, "=", add + "<br>")

var num1 = 80 
var num2 = 50
var subtract = num1-num2
console.log(num1, "-", num2, "=", subtract);
document.write(num1, "-", num2, "=", subtract + "<br>")

var num1 = 80 
var num2 = 50
var multiply = num1*num2
console.log(num1, "*", num2, "=", multiply);
document.write(num1, "*", num2, "=", multiply + "<br>")

var num1 = 80 
var num2 = 50
var devide = num1/num2
console.log(num1, "/", num2, "=", devide);
document.write(num1, "/", num2, "=", devide + "<br>")

var num1 = 80 
var num2 = 50
var modulus = num1%num2
console.log(num1, "%", num2, "=", modulus);
document.write(num1, "%", num2, "=", modulus + "<br>" + "<br>")

var num3
document.write("Value after variable declaration is : " + num3 + "<br>")

num3 = 5
document.write ("Initial value : " + num3 + "<br>")

num3++ 
document.write ("Value after increment is : " + num3 + "<br>")

var add = num3+7
document.write ("Value after addition is : " + add + "<br>")

add--
document.write ("Value after increment is : " + add + "<br>")

var devide = add/3
document.write ("Output : ", "The reminder is : " + devide + "<br>" + "<br>")

var script = 600*5
document.write ("Total cost to buy tickets to a movie is: " + script + "PKR")


var num = 5;
    var length = 10;

    document.write("<h2>Multiplication Table of " + num + "</h2>");

    for (var table = 1; table <= length; table++) {
      document.write(num + " x " + table + " = " + (num * table) + "<br>");
    }