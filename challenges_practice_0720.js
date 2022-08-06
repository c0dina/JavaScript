// // Get array from numbers from 1 to 255
// function get_array(){
//     var arr = [];
//     for(var i=1; i<256; i++){
//         arr.push(i);
//     }
//     return arr;
// }
// z = get_array();
// console.log(z);


// // Write a function that would get the sum of all the even numbers from 1 - 1000.
// function sum_even_numbers(){
//     var sum = 0;
//     for(var i=1; i<1001; i++){
//         if(i%2 == 0){
//             sum = i+sum;
//         }
//     }
//     return sum;
// }
// z = sum_even_numbers();
// console.log(z);
// // output = 250500


// // Write a function that returns the sum of all the odd numbers from 1 to 5000
// function sum_odd(){
//     var sum = 0;
//     for(var i=1; i<5001; i++){
//         if(i%2 != 0){
//             sum = i + sum;
//         }
//     }
//     return sum;
// }
// z = sum_odd();
// console.log(z);


// // Write a funciton that returns the sum of all the values within an array
// function iter_arr(arr){
//     var sum = 0;
//     for(var i=0; i < arr.length; i++){
//         sum = sum + arr[i];
//     }

//     return sum;
// }
// z = iter_arr([1,2,5]);
// y = iter_arr([-5, 2, 5, 12]);
// console.log(z);
// console.log(y);
// //output = 8 , 14


// // Write a function that returns the maximum number in the array (e.g. for [-3,3,5,7] max is 7)
// function findMax(arr){
//     max = arr[0];  // max is already set to the first index value
//     for(var i =0; i<arr.length; i++){
//         if(max<arr[i]){
//             max = arr[i];
//         }
//     }    
//     return max;

// }

// console.log(findMax([-3,3,5,7]));
// console.log(findMax([-2,-3,-4,20]));



// // Write a function to return an array consisting of every other items from the input
// // input [1,2,3,4,5,6,7] -> [1,3,5,7]
// function everyOther(input){
//     var newArray = [];
//     for(var i=0; i<input.length; i+=2){
//         newArray.push(input[i]);
//     }
//     return newArray;
// }
// x = everyOther([1,2,3,4,5,6,7]);
// console.log(x);


// function findAvg(arr){
//     sum = 0;
//     avg = 0;
//     for(i=0; i < arr.length; i++){
//         sum = sum + arr[i];
//     }
//     sum = sum / arr.length;
//     return sum;
// }
// console.log(findAvg([1,2,3,4]));
// console.log(findAvg([7,7,7,7]));


// Write a function that would return an array of all the odd numbers to 50.
// function oddTo50(){
//     arr = [];
//     for(i=1; i<50; i+=2){
//         arr.push(i);
//     }
//     return arr;
// }
// console.log (oddTo50());


// Given value of Y, write a function that takes an array and returns the number 
// of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, 
// your function will return 2. (There are two values in the array greater than 3, which are 5, 7).
function greaterY(arr, Y){
    count = 0;
    for(i=0; i<arr.length; i++){
        if(Y<arr[i]){
            count ++;
        }
    }    
    return count;

}
console.log(greaterY([1,3,5,7], 3));
console.log(greaterY([1,1,1,1], 2));





