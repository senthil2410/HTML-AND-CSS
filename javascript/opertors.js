let name="Senthil" ; //String

let age=23; // Number

let isLoggedin=true;

 

let grade=null; //Null


let balance=1234567890n; //BigInt


let uniqueKey=Symbol("id"); //Symbol


let person={name:"Alice",age:30}; //Object

let numbers=[1,2,3,4]; //Array

 console.log(typeof "hello");   //typeof operator  
 


 // OPERATORS 


 console.log(5+2); //7


 console.log(5-2); //3


 console.log(5*3);  //15


 console.log(5/2);   //2


 console.log(5%2);   //1

 console.log(2**4); //16


 let score=5;

 console.log(score++);


console.log(score);


console.log(++score);


console.log("senthil"*3);  //Nan

let sum=0.1+0.2;

console.log(sum.toFixed(2));


console.log(Math.max(4,5,6,7));

console.log(Math.min(1,2,3,4));



// Strings


const username="Senthil";

const userEmail='senthil@gmail.com';


const greet=`Hi ${username} .This is your mail :${userEmail} right`;


console.log(greet);


console.log('Hi I\'m Senthil');

console.log('Hi Im Senthil');


const nums = [5, 10, 15];
console.log(Math.max(...nums));  // spread operator


const marks=[45,50,65,70,80];

const s_marks=[...marks,85,90];

console.log(s_marks);


const studentAge={senthil:23,kumar:22}

const Age={...studentAge,thangaraj:55};

console.log(Age);