//question # 1:
var character = prompt("Enter any number,or character!");
var code = character.charCodeAt(0);
if (code >= 48 && code <= 57) {
    console.log("Number");
}
else if (code >= 65 && code <= 90) {
    console.log("Uppercase letter");
}
else if (code >= 97 && code <= 122) {
    console.log("Lowercase letter");
}
else {
    console.log("Other character");
}

//question # 2:
var num1 = +prompt("Enter first number");
var num2 = +prompt("Enter second number");
if (num1 > num2) {
    console.log("First number is larger!");
}
else if (num1 < num2) {
    console.log("Second number is larger!");
}
else {
    console.log("Both are equals!");
}

//question # 3:
var num3 = +prompt("Enter any positive or negitive number!");
if (num3 > 0) {
    console.log("Positive");

} else if (num3 < 0) {
    console.log("Negetive");
} else {
    console.log("Zero");
}

//question # 4:
var character1 = prompt("Enter vowel letters...")
if (character1 == "a" || character1 == "e" || character1 == "i" || character1 == "o" || character1 == "u" || character1 == "A" || character1 == "E" || character1 == "I" || character1 == "O" || character1 == "U") {
    console.log("true");
} else {
    console.log(false);
}

//question # 5:
var password = "areeba smit";
var userPassword = prompt("Enter his/her password!");
     if (userPassword === password) {
    alert("Correct password")
} else if (password != userPassword) {
    alert("Incorrect password!")
}else {
    alert("Enter a password!")
}

//question # 6:
var client = +prompt("Enter a time!");
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day!";
    console.log(greeting);
} else {
    greeting = "Good evening!";
    console.log(greeting);
}

//question # 7:
var time = +prompt("Enter time:");

if (time >= 0 && time < 1200) {
    console.log("Good Morning!");
}
else if (time >= 1200 && time < 1700) {
    console.log("Good Afternoon!");
}
else if (time >= 1700 && time < 2100) {
    console.log("Good Evening!");
}
else if (time >= 2100 && time < 2359) {
    console.log("Good Night!");
}

// __________ASSIGNMENT DONE BY AREEBA-SAJID__________ //