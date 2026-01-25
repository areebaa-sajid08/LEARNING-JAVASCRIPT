//Question # 1;
// var userPrompt = +prompt("Enter positive integer here :");
// document.write("Number: " + userPrompt + "<br>");
// document.write("Round off value: " + Math.round(userPrompt) + "<br>");
// document.write("Floor value: " + Math.floor(userPrompt) + "<br>");
// document.write("Ceil value: " + Math.ceil(userPrompt) + "<br>");

//Question # 2;
// var userPrompt = +prompt("Enter negative integer here :");
// document.write("Number: " + userPrompt + "<br>");
// document.write("Round off value: " + Math.round(userPrompt) + "<br>");
// document.write("Floor value: " + Math.floor(userPrompt) + "<br>");
// document.write("Ceil value: " + Math.ceil(userPrompt) + "<br>");

//Question # 3;
var userInput = prompt("Enter a number:");
var number = userInput.toString();

if (isNaN(number)) {
    document.write("Invalid input. Please enter a valid number.");
} else {
    var absoluteValue = Math.abs(number);
    document.write(`The absolute value of ${number} is ${absoluteValue}`);
}

//Question # 4;
// document.write("Random dice value : " + Math.ceil(Math.random() * 6) + "<br>");

//Question # 5;
// if (Math.ceil(Math.random()*2) == 2) {
//     document.write(2 + "<br>Random coin value : Head" );
// } else {
//     document.write(1 + "<br>Random coin value : Tail" );
// }

//Question # 6;
// document.write("Random number between 1 to 100 is : " + Math.ceil(Math.random() * 100));

//Question # 7;
var userWeight = +prompt("Enter your weight in Kilograms : ");
if (userInput === null) {
    alert("You clicked Cancel. No weight entered.");
} else {
    var weight = parseFloat(userInput);
    if (isNaN(weight)) {
        alert("Invalid input. Please enter a valid weight.");
    } else {
        document.write(`The weight of user is ${weight} kilograms`);
    }
}

//Question # 8;
var SecretNumber = +prompt("Ask secret number between 1 to 10 :");
if (SecretNumber == Math.ceil(Math.random() * 10)) {
    alert("Congurations! you enter a right number,")
} else {
    alert("Sorry! Try again")
}

// __________ASSIGNMENT DONE BY AREEBA-SAJID__________ //