//Question # 1;
var firstName = prompt("Enter your first name here :");
var lastName = prompt("Enter your last name here : ");
var fullName = firstName + " " + lastName;
document.write("<h1 class = 'heading'>Welcome to my website " + fullName + "!</h1>");

//Question # 2;
var phone = prompt("Enter your Favourite model of Phone :");
document.write("My Favourite phone is : " + phone + "<br>");
document.write("Length of string : " + phone.length + "<br>");

//Question # 3;
var word = "Pakistani";
var indexWord = word.indexOf('n');
document.write("String : " + word + "<br>");
document.write("Index of 'n' : " + indexWord + "<br>");

//Question # 4;
var hello = "Hello World";
var indexHello = hello.lastIndexOf('l');
document.write("String : " + hello + "<br>");
document.write("Last index of 'l' : " + indexHello + "<br>");

// //Question # 5;
var myCountry = "Pakistani";
var character = myCountry.charAt(3);
document.write("String : " + myCountry  + "<br>");
document.write("Character at index 3 : " + character + "<br>");

//Question # 6;
var firstName = prompt("Enter your first name here :");
var lastName = prompt("Enter your last name here : ");
var fullName = firstName.concat(" " + lastName);
document.write("<h1 class = 'heading1'>Welcome to my website " + fullName + "!</h1>");

//Question # 7;
var city = "Hyderabad";
var replace = city.replace("Hyderabad", "Islamabad");
document.write("City : " + city + "<br>");
document.write("After replacement : " + replace + "<br>");

//Question # 8;
var message = "Ali and sami are best friends. They play cricket and football together.";
document.write(message.replaceAll("and","&") + "<br>");

//Question # 9;
var string = "472";
var num = Number(string);
document.write("Value : " + string + "<br>");
document.write("Type : " + typeof string  + "<br>");
document.write("Value : " + num + "<br>");
document.write("Type : " + typeof num + "<br>");

//Question # 10;
var userInput = prompt("Enter a word which you want to see in capital words : ");
document.write("User input : " + userInput + "<br>");
var upperCase = userInput.toUpperCase();
document.write("Upper case : " + upperCase);

//Question # 11;
var userCase = prompt("Enter a word which you want to see their first letter in capital alphabet : ");
var firstLetter = userCase.slice(0,1);
var remainingCharacter = userCase.slice(1);
var finalCharacter = firstLetter.toUpperCase() + remainingCharacter.toLowerCase();
document.write(finalCharacter);

//Question # 12;
var num1 = 35.36;
var str = num1.toString();
var finalResult = str.replace(".","");
document.write("Number : " + num1 + "<br>");
document.write("Result : " + finalResult + "<br>");

//Question # 13;
var userName = prompt("Enter your name here :");
if (userName.includes('@') || userName.includes('-')|| userName.includes('!') || userName.includes('.')){
    alert("Please enter a valid name!")
}

//Question # 14;
var bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
var userFound = prompt("Welcome to Areeba Sajid's bakery. What do you want to order sir/ma'am?");
var found = false;
for (var i = 0; i <= bakery.length; i++) {
  if (bakery[i] === userFound.toLowerCase()) {
    found = true;
    break;
   }
}
if (found) {
    alert(userFound + " is available at index " + i + " in our bakery.");
} else {
    alert("We are Sorry. " + userFound + " is not available in our bakery.")
}

//Question # 15;

//Question # 16;
var university = "University Of Karachi";
var array1 = university.split("");
for (var i = 0; i < array1.length; i++) {
    document.write(array1[i] + "<br>")  
}

//Question # 17;
var user2 = prompt("Enter a word:");
var lastChar = user2.charAt(user2.length - 1);
document.write("User input: " + user2 + "<br>");
document.write("Last character of input: " + lastChar);

//Question # 18;
var text = "The quick brown fox jumps over the lazy dog";
var words = text.toLowerCase().split(" ");
var add = 0;
for (var i = 0; i < words.length; i++) {
    if (words[i] == "the") {
      add++;  
    }
    
}
document.write("Text: " + text + "<br>");
document.write("There are " + add + " occurrence(s) of word 'the'");

                                       // __________ASSIGNMENT DONE BY AREEBA-SAJID__________ //