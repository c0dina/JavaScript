var x = 0
for(var i=1; i<4; i++)
{
    x=x+i;
    console.log(x);
    console.log(i);
}
// output: 1,1,3,2,6,3


var x = 0;
for(var i=1; i<4; i=i+2)
{
    x = x+i;
    console.log(x);
    console.log(i);
}
// output: 1,1,4,3


a();
function a()
{
    console.log(25);
}
// output: 25
// the function is called on line 21 and found on line 22, therefore 
// the answer is 25, not undefined or 0.


function a()
{
    var b = 25;
    b = b+10;
    console.log(b);
}
a();
// output: 35


function a(b,c)
{
    return b*3 - c;
}
console.log(a(3,2));
console.log(a(1,1));
// output: 7,2


function a()
{
    return 25;
    return 50;
}
console.log(a());
// output: 25  -- functions can only have one return statement


for(var i=1; i<=20; i++)
{
    if (i > 5)
    {
        break;
    }
    else{
        console.log('hello');
    }
}
//output: hello, hello, hello, hello, hello


for(var num1=1; num1<=3; num1++)
{
    for(var num2=1; num2<=2; num2++)
    {
        console.log('Dojo');
    }
}
// output: Dojo, Dojo, Dojo, Dojo, Dojo, Dojo


var msg1 = 'hello';
var msg2 = 'world!';

for (var i=1; i<=msg1.length; i++)
{
    for(var e=1; e<=msg2.length; e++)
    {
        if(msg1.length ==4)
        {
            console.log(msg1 +''+ msg2);
        }
    }

    if(i != 4)
    {
        console.log(msg1.length+msg2.length);
    }
}
// output: 11,11,11,11

var count =1;
while(count<5)
{
    console.log('Dojo');
    count++;
}
// output: Dojo, Dojo, Dojo, Dojo

var x = 7;
var message = 'boom';

while(x>message.length)
{
    console.log(message + x);
    x--;
}
// output: boom 7, boom 6, boom 5