console.log("Printing all numbers between -10 and 19");
var x = -10;
while (x <= 19)
{
    console.log(x);
    x++;
}

console.log("Printing all even numbers between 10 and 40");
x = 10;
while (x <= 40)
{
    if(x%2 === 0)
        console.log(x);
    
    x++;
}

console.log("Printing all odd numbers between 300 and 333");
x = 300;
while (x <= 333)
{
    if(x%2 === 1)
        console.log(x);
    
    x++;
}

console.log("Printing all numbers divisible by 5 AND 3 between 5 and 50");
x = 5;
while (x <= 50)
{
    if(x%5 === 0 && x%3 === 0)
        console.log(x);
    
    x++;
}