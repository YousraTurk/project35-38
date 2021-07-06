// FUNCTION

// 1. Write a function that displays current date & time in your 
// browser.

// function DateTime(){
//     var d = new Date();
//     document.write(d)
// }
// DateTime();

// 2. Write a function that takes first & last name and then it 
// greets the user using his full name.

// var firstName = prompt("Enter your first name : ");
// var lastName = prompt("Enter your last name : ");
// function Greeting(){
//     var FullName = firstName + " " + lastName ;
//     alert(" Heyyyy!  Welcome.  " + FullName);

// }
// Greeting();

// 3. Write a function that adds two numbers (input by user) 
// and returns the sum of two numbers.

// var firstNum = +prompt(" Enter first number ");
// var lastNum = +prompt(" Enter last number ");
// function sum(num1,num2){
//     var add = num1 + num2;
//     return add;

// }
// var a =sum(firstNum,lastNum);
// alert(a);

// 4. Calculator:
// Write a function that takes three arguments num1, num2 
// & operator & compute the desired operation. Return and 
// show the desired result in your browser.

// var firstNum = +prompt(" Enter first number ");
// var lastNum = +prompt(" Enter last number ");
// var opera = prompt(" Enter operator ");
// function cal(num1,opr,num2){
//     var Calculator= eval(num1+opr+num2);
//     return Calculator;

// }
// var a = cal(firstNum,opera,lastNum);
// document.write(" The result is : " + a)


// 5. Write a function that squares its argument.
// var num = +prompt(" Enter number for squaring : ")
// function squared(number){
//     var sqr = number*number;
//     return sqr ; 
// }
// var number = squared(num);
// alert(number);

// 6. Write a function that computes factorial of a number.
// function factorial(n){


// var number = +prompt(" Enter a number : ");
// function facto(number){
//     var fact = 1;

//     if(number === 0){
// return fact ;    
//     }
//     else if(number<0){
//         return fact ;    
    
//     }
//     else{
//         for(var i = 1; i<=number; i++){
//             fact = fact*i;
    
//         }
//         return fact ;    
    
//     }
// }
// var n = facto(number);
//     document.write(" The factorial of number "+number   +" is " +   n );

// 7. Write a function that take start and end number as inputs 
// & display counting in your browser.


// var startNumber = +prompt(" Enter a strting number : ");
// var endNumber = +prompt(" Enter a end number : ");
// function count(){
//     for(startNumber ; startNumber<=endNumber; startNumber++){
//         var a = startNumber;
//         document.write(a+"<br>");
//     }
    

// }

// count();

// Write a nested function that computes hypotenuse of a 
// right angle triangle.

// var perp = +prompt(" Enter perpendicular of a right triangle : ");
// var base = +prompt(" Enter base of a right triangle : ");

// function hypotenuse(b,p){
//     var a = Math.sqrt(b*b+p*p);
//     return a;

// }
// var calHyp = hypotenuse(base,perp);
// document.write(calHyp);

// Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

// var height = +prompt(" Enter height : ");
// var width = +prompt(" Enter width : ");

// function area(w,h){
//     var a = w*h;
//     return a;

// }
// var calArea = area(width,height);
// alert(" The Area is : "+calArea);

// 10. Write a JavaScript function that checks whether a passed 
// string is palindrome or not?

// var palin = prompt(" Enter the string to check the Palindrome : ")
// function CheckPalindrome(string){
//     var flag = " It is a palindrome  ";

//     for(var i = 0; i<(string.length)/2;i++){
//         if(string[i] != string[string.length-1-i]){
//             flag = " It is not a palindrome ";
//             return flag;
//         }
//         else{
//             flag === " It is a palindrome  ";
//             return flag;


//         }
//     }
    
// }
// var a = CheckPalindrome(palin);
// document.write(palin+"  "+a);

// Write a JavaScript function that accepts a string as a 
// parameter and converts the first letter of each word of the 
// string in upper case.

// var word = prompt(" Enter a string ; ");
// function str(string){
//     var first = string.charAt(0);
// var uc = first.toUpperCase();
// var second = string.slice(1);
// var lc = second.toLowerCase();
// var final = uc+lc;
// return final ;
// }
// var a = str(word);
// alert(word + " : "+a);

// Write a JavaScript function that accepts a string as a 
// parameter and find the longest word within the string. 
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

// function findLongest(str){
//     var words = str.split(" ");
//     var longest = " ";

//     for(var word of words){
//         if( word.length > longest.length) longest = word;
//     }
//     return longest;
    

// }
// findLongest("Web Development Tutorial");







// Write a JavaScript function that accepts two arguments, a 
// string and a letter and the function will count the number of function | JAVASCRIPT
// occurrences of the specified letter within the string.






// The Geometrizer
// Create 2 functions that calculate properties of a circle, using 
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output 
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area 
// is NN".

// Circumference of circle = 2 πr
// Area of circle = πr2

// function Circumferenceofcircle() {
//     var r = prompt("enter a radius ")
//     var a = (Math.PI * r) * 2;
//     document.write("The circumfrence is =" + a + "." + "<br>");
// }

// function Areaofcircle() {
//     var radius = prompt("enter a radius ")
//     var b = (Math.PI * radius) * radius;
//     document.write("The area is =" + b + "." + "<br>");
// }

// Circumferenceofcircle();
// Areaofcircle();


