var x =2;
var points = [40,100,1,5,25,10];

if(points[x] == 1)
{
    console.log(points[x-2]);
}
else
{
    console.log('hello');
}
// output: 40


var x =2;
var y = [1,2,3,4,5];
var z =[6,7,8,9,10];

if(y[x] + z[1] == z[4])
{
    console.log('Dojo');
}
else
{
    console.log('Hello World');
}
// output: Dojo


var x = 'boom';
var y = ['hi', 'hello', 'hey'];

if(x.length == 3)
{
    y.push(x);
    console.log(x[3]);
}
else 
{
    console.log(x);
}
// output: boom

var x = ['John', 'Chris', 'Mark', 'PJ'];

if(x.length == 4)
{
    console.log(x[x.length - 3]);
}
else
{
    console.log('Dojo');
}
// output: Chris


var x =10;

function abc(x) {
    console.log(x);
    return x*10;
}

abc(x);
console.log(x);
// output: 10, 10


var x =10;

function abc(x) {
    console.log(x);
    return x*10;
}

var z = abc(x);
console.log(z);
// output: 10, 100


var x = 10;
function abc(x) {
    console.log(x);
    return x*10;
}

var z = abc(x) + abc(x);
console.log(z);
//output: 10, 10, 200


var x = 10, y = 20;

function abc(x, y) {
    x = x + 10;
    y = y + 10;
    console.log(x);
    console.log(y);
    return x*10;
}
z = abc(x,y);
console.log(x);
console.log(y);
console.log(z);
// output: 20, 30, 10, 20, 200


var x = 10;
var y = 20;

function abc(x,y) {
    x = x+10;
    y = y+10;
    return x*10;
}

z = abc(x,y) + abc(y,x);
console.log(z);
// output: 500


var x = [1, 3, 5, 7];

function abc() {
    var x = [0, 1, 2, 3];
    for(var i=0; i<x.length; i++){
        x[i] = x[i] +2;
    }
}

abc();
console.log(x);
// output: [1, 3, 5, 7]