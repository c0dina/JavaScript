//Write a function to calculate the tip with totalbill and tip percent input parameters
function calculateTipAmount (billTotal, tipPercent){
    var billTotal;
    var tipPercent;
    var tipDue = billTotal * tipPercent;
    return tipDue; 
}
w = calculateTipAmount(140, .20);
console.log(w);


// Code Challenge: Return
function hello() {
    console.log('hello');
}
hello();
console.log('Dojo');
// output is hello dojo


function hello() {
    console.log('hello');
    return 15;
}
var result = hello();
console.log('result is', result);
// output is hello result is 15


function numPlus(num) {
    console.log('num is', num);
    return num+15;
}
var result = numPlus(3);
console.log('result is', result);
// output: num is 3 , result is 18


var num = 15;
console.log(num);
function logAndReturn(num2){
   console.log(num2);   
   return num2;
}
var result = logAndReturn(10);
console.log(result);
console.log(num);
// output: 15, 10, 10, 15

console.log('break');

var num = 15;
console.log(num);
function timesTwo(num2){
   console.log(num2);   
   return num2*2;
}
var result = timesTwo(10);
console.log(result);
console.log(num);
// output: 15, 10, 20, 15

console.log('break');

function timesTwoAgain(num) {
    console.log('num is', num);
    var y = num*2;
    return y;
}
var result = timesTwoAgain(3) + timesTwoAgain(5);
console.log('result is', result);
// output: 3, 5, 16

function sumNums(num1, num2) {  
    return num1+num2;
 }
 console.log(sumNums(2,3))
 console.log(sumNums(3,5))
// output: 5, 8


 function printSumNums(num1, num2) {
    console.log(num1);   
    return num1+num2;
 }
 console.log(printSumNums(2,3))
 console.log(printSumNums(3,5))
 // output: 2, 5, 3, 8

 function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum is', sum);
    return sum;
}
var result = sumNums(2,3) + sumNums(3,5);
console.log('result is', result);
// output: sum is 5, sum is 8, result is 13
console.log('BREAK**********************');


function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum is', sum);
    return sum;
}
var result = sumNums(2,3) + sumNums(3,sumNums(2,1)) + sumNums(sumNums(2,1),sumNums(2,3));
console.log('result is', result);


function displayIf(childHeight){
    if(childHeight > 52){
        console.log("Get on the ride!");
    }
    else if(childHeight < 52){
        console.log("Sorry!");
    }
}

console.log(displayIf(60));

console.log(displayIf(54));

