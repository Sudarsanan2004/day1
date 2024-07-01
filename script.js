// console.log('hello All');
var a=10;
b="sudan";
let c=false;
// console.log(typeof(a))
// console.log(typeof(b))
// console.log(typeof(c))

// js objects
let person={
    name:'maya',
    age:25,
    location:"trivandrum"
}
// console.log(person.age);
let arr=["sudan","jai",50]
// console.log(arr.length)


let arr_obj=[{age:23,location:"tvm"},{age:43,location:"kochi"}]
// console.log(arr_obj[1].location)

function add(a,b)
{
    var sum=a+b;
    return sum    
}
let result=add(10,20)
// console.log(result)
// ++post and prefix++
a=1;
b=++a;
// console.log(a)
// console.log(b)

var a1=99;
var a2='99';
if (a1>a2) 
{
    console.log("a1 is greater")
} 
else if(a1==a2) 
{
    console.log("a1 is sameas a2 "+a1)
}
else 
{
    console.log("a2 is greater")
}

// for loop

var arr2=[10,20,30,40]

for (let i = 0; i < arr2.length; i++) 
{
    console.log(arr2[i])   
}

for (const i of arr2)
    {
        console.log(i)
    }

