var a = 5, b = 10, c = 15; // 3 variable in one statement.
console.log(a + b + c);

//______legal variable______;
var name1 = "Areeba Sajid";
var my_name = "Areeba Sajid";
var $price = "900000";
var myBook = "A smarter way to learn Javascript";
var _email = "xyzxyz123@gmail.com";

//______illegal variable______;
// var var = "hello world"; //reserved keyword
// var 1name = "Areeba Sajid"; //starting with number
// var @email = "xyzxyz123@gmail.com"; //special character
// var my-book = "A smarter way to learn Javascript"; //dash (-) not allowed
// var new book = "hello world"; //space not allowed

document.write("<h2>Rules for naming JS variables</h2>");
document.write("Variable names can only contain, numbers, $ and _.   For example:$my_1stVariable <br>Variable must begin with a letter, $ or _.   For example:$name, _name or name <br> Variable names are case sensitive<br> Variable names should not be JS keywords");
