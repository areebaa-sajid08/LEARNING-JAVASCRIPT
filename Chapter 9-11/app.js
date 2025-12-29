//question no 1:
var city = prompt("ENTER CITY NAME!");
if (city === "Karachi") {
    document.write("<h2 class = 'heading'>WELCOME TO THE CITY OF LIGHTS!</h2>");
       console.log(city);      
}

//question no 2:
var gender = prompt("GENDER:");
var note = ("<p class = 'para'>We’re glad you’re here. This platform is designed to help you discover, learn, and grow.\nTake your time exploring — your journey starts here!</p>");
if (gender == "male") {
    document.write("<h2 class = 'heading'>Good Morning Sir!</h2>" + note);
      console.log(gender);
}
else if (gender == "female") {
    document.write("<h2 class = 'heading'>Good Morning Ma'am!</h2>" + note);
      console.log(gender);
}

//question no 3:
var color = prompt("Enter color of road traffic signal!");
if (color == "red") {
    document.write("<h2 class = 'heading'>Must stop!</h2>")
    console.log(color); 
}
else if (color == "yellow") {
    document.write("<h2 class = 'heading'>Ready to move!</h2>")
    console.log(color); 
}
else if (color == "green") {
    document.write("<h2 class = 'heading'>Move now!</h2>")
    console.log(color);    
}

//question no 4:
var fuel = prompt("Remaining fuel in car (in litres)");
if (fuel == "0.25 litres") {
    document.write("<h2 class = 'heading'>'Please refill the fuel in your car!'</h2>");
    console.log(fuel);    
}

//question no 5:
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");                      
    console.log(a);
    //true 
}

var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");                     
    console.log(b);
    //false yeh condition nhi chaly gi q ky post-increment mai pehly print hota hai or jab next time variable ko call kary to  value mai incremant hota hai.
}
var c = 12;
if (c++ === 13) {
    alert("Condition 1 is true");                                        
    console.log(c);
    //false yeh nhi chaly ga q ky post-increment mai pehly print hota hai or jab next time variable ko call kary to value mai incremant hota hai.
}
else if (c === 13) {
     alert("Condition 2 is true");                                      
    console.log(c);
    //yeh condition chaly gi q ky is mai increment pehly hi ho chuka tha.
}
else if (++c < 14) {
    alert("Condition 3 is true");                                      
    console.log(c);
    //false yeh condition nhi chaly gi q ky pre-increment mai pehly increment hota hai baad mai value print hoti hai or yaha value 14 ho chuki hai.
}
else if (c === 14) {
    alert("Condition 4 is true");                                    
    console.log(c);
    //true 
}
var materialCost = 20000;
var labourCost = 2000;
var totalCost = materialCost + labourCost 
if (totalCost === labourCost + materialCost) {                        
    alert("The cost equals");
    console.log(totalCost);
    //true 
}
if (true) {
    alert("true");
    console.log(true);

}
// if(false) nhi chalta;
if (false) {
    alert("false");
    console.log(false);

}
if ("car" < "cat") {
    alert("Car is smaller than cat");                                  
    console.log("Car is smaller than cat");
    //true JavaScript alphabets ko dictionary order se compare karti hai is liye c = c, a = a, r < t
}

// question no 6:
var sub1 = +prompt("Enter marks of subject 1");
console.log(sub1);
var sub2 = +prompt("Enter marks of subject 2");
console.log(sub2);
var sub3 = +prompt("Enter marks of subject 3");
console.log(sub3);
var totalMarks = 300;
console.log(totalMarks);
var obtainedMarks = sub1 + sub2 + sub3;
console.log(obtainedMarks);
var percentage = (obtainedMarks / totalMarks) * 100;
console.log(percentage);
var Grade, Remarks;
if (percentage > 80) {
    Grade = "A-one"; 
    Remarks = "Excellent";
}
else if (percentage > 70) {
    Grade = "A"; 
    Remarks = "Good";
}
else if (percentage > 60) {
    Grade = "B"; 
    Remarks = "You need to improve!";
}
else {
    Grade = "Fail"; 
    Remarks = "Sorry!";
}
document.write("<h1 class = 'heading'>Marks Sheet</h1>");
document.write("<b class = 'heading'>Total Marks : " + totalMarks +"<br></b>");
document.write("<b class = 'heading'>Marks Obtained : " + obtainedMarks + "<br></b>");
document.write("<b class = 'heading'>Percentage : " + percentage + "%<br></b>");
document.write("<b class = 'heading'>Grade : " + Grade + "<br></b>");
document.write("<b class = 'heading'>Remarks : " + Remarks + "</b>");

// question no 7:
var secretNum = 7;
var userGuess = +prompt("Guess the secret number (1 to 10)");
console.log(userGuess);

if (userGuess === secretNum) {
    alert("Bingo! Correct answer");
} 
if (userGuess + 1 === secretNum) {
    alert("Close enough to the correct answer");
} else { 
    alert("Try again!");
}

// question no 8:
var weather = +prompt("Check Weather");
console.log(weather);
var finalWeather = weather/3;
alert("Today weather is " + finalWeather);
console.log(finalWeather);

// question no 9:
var num = +prompt("Enter a number:");
console.log(num);

if (num % 2 === 0) {
    alert("The number is Even");
} else{
     alert("The number is Odd");
}

// question no 10:

var temperature = +prompt("Enter today's temperature");
console.log(temperature);
if (temperature > 40) {
    alert('"It is too hot outside."');
}
else if (temperature > 30) {
    alert('"The weather today is normal."');
}
else if (temperature > 20) {
    alert("Today's weather is cool .");
}
else if (temperature > 10) {
    alert("OMG! Today's weather is so cool.");
} else {
    alert("It's very cold today")
}
// question no 11:
var firstNum = +prompt("Enter first number");
console.log(firstNum);
var secondNum = +prompt("Enter second number");
console.log(secondNum);
var operation = prompt("Enter operation like (+,-,x,/,%");
console.log(operation);
var result;
if (operation === "+") {
    result = firstNum + secondNum;
    alert("Result : " + result);
    console.log(result);
}
else if (operation === "-") {
    result = firstNum - secondNum;
    alert("Result : " + result);
    console.log(result);
}
else if (operation === "*") {
    result = firstNum * secondNum;
    alert("Result : " + result);
    console.log(result);
}
else if (operation === "/") {
    result = firstNum / secondNum;
    alert("Result : " + result);
    console.log(result);
}
else if (operation === "%") {
    result = firstNum % secondNum;
    alert("Result : " + result);
    console.log(result);
} else {
    alert("Invalid operator")
}
                               // __________ASSIGNMENT DONE BY AREEBA-SAJID__________ //