//question # 1;
var multiArrays = [ [1, 2, [3] ], [4], [5, [6, [7] ] ],[8] ];

//question # 2;
var myArray = [[0, 1, 2, 3],[1, 0, 1, 2],[2, 1, 0, 1]];
document.write(myArray[0].join(" ") + "<br>", myArray[1].join(" ") + "<br>", myArray[2].join(" ") + "<br><hr>");

//question # 3;
for (var i = 1; i <= 10; i++) {
    document.write(i + "<br>");
}

// question # 4;
var num = +prompt("Enter a number to show its multiplication table : ");
var userNum = +prompt("Enter a length of multiplication table :");
document.write("<h1>Multiplication table of " + num + "<br> Lenght " + userNum + "<br></h1>")
for (var i = 1; i <= userNum; i++) {
    console.log(num + " x " + i + " = " + num * i); 
    document.write(num + " x " + i + " = " + num * i + "<br>");
}

// question # 5;
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
var elements = ("Element at index ");
for (var i = 0; i <= 4; i++) {
    console.log(fruits[i] + "<br>");
    document.write(fruits[i] + "<br>");
}

for (var i = 0; i <= 4; i++) {
    console.log(elements + i + " is " + fruits[i] + "<br>");
    document.write(elements + i + " is " + fruits[i] + "<br>");
}
 
// question # 6;
document.write("<h2>a.  Counting :</h2>");
for (var i = 1; i <= 15; i++) {
    console.log(i);
    document.write(i);
    if (i <= 15) {
        document.write(", ");
    }
}

document.write("<h2>b.  Reverse Counting :</h2>");
for (var i = 10; i > 0; i--) {
    console.log(i);
    document.write(i);
    if (i > 0) {
        document.write(", ");
    }
}

document.write("<h2>c.  Even :</h2>");
for (var i = 0; i <= 20; i += 2) {
    console.log(i);
    document.write(i)
    if (i <= 20) {
        document.write(", ")
    }
}

document.write("<h2>d.  Odd :</h2>");
for (var i = 1; i <= 19; i += 2) {
    console.log(i);
    document.write(i);
    if (i <= 19) {
       document.write(", ") 
    } 
}

document.write("<h2>e.  Series :</h2>");
for (var i = 2; i <= 20; i += 2) {
    console.log(i + "k");
    document.write(i + "k");
    if (i <= 20) {
        document.write(", ")
    }
}

// question # 7;
var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
var userItem = prompt("Welcome to Areeba Sajid's bakery. What do you want to order sir/ma'am?");
for (var i = 0; i <= bakeryItems.length; i++) {
    for (var j = 0; i<=bakeryItems[i]; i++) {
        
        
    }
    // if (userItem.toLowerCase() === bakeryItems[i]) {

    //     console.log(userItem + " is available at index " + i + " in our bakery");
    //     document.write("<br>" + userItem + " is <b>available</b> at index " + i + " in our bakery<br>");
    // }
}

// question # 8;
var A = [24, 58, 73, 91, 12];
var largest = A[0]
for (var i = 1; i< A.length; i++) {
    if (A[i] > largest) {
        largest = A[i]
    }
    if (i === A.length -1) {
        document.write("Array items : [" + A.join(", ") + "]<br>");
        document.write("The largest number is : " + largest + "<br>")
    }
}
    
// question # 9;
var A = [24, 58, 73, 91, 12];
var smallest = A[0]
for (var i = 1; i< A.length; i++) {
    if (A[i] < smallest) {
        smallest = A[i]
    }
    if (i === A.length -1) {
        document.write("Array items : [" + A.join(", ") + "]<br>");
        document.write("The smallest number is : " + smallest + "<br>")
    }
}
// question # 10;
for (var  i = 5; i <= 100; i += 5) {
    document.write(i)
    if (i + 5 <= 100) {
       document.write(", ")
    }
}
    
                                        // __________ASSIGNMENT DONE BY AREEBA-SAJID__________ //