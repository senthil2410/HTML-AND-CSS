
const userName="Senthil";

const userEmail='senthil@gmail.com';


const greet=`Hi ${username} .This is your mail :${userEmail} right`;


console.log(greet);


console.log('Hi I\'m Senthil');

console.log('Hi Im Senthil');


console.log(userName[0]); //S

console.log(userName.charAt(2)); //n


const sentence="I love JS";

let words=sentence.split(" ");

let back=words.join("-");



const person={
   name:["senthil","kumar"],
   age:23
}

function insertingValue(property)
{
      console.log(person[property]);
}


insertingValue("name");

