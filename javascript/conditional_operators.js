
let age=18;

if(age<13)
{
    console.log("child")
}
else if(age<18)
{
    console.log("teenager");

}
else{
    console.log("adult");
}


console.log(5=='5');

console.log(5==='5');



let isLoggedIn=true;
let isAdmin=true;

if(isLoggedIn && isAdmin)
{
    console.log("Welcome admin");
}


let points=80;

let grade=(points>70) ? "pass" :"fail";

console.log(grade);



let cabin="hercules";

switch(cabines)
{
    case "hercules":
        console.log("hercules bay");
    default:
        console.log("Any other bay");
}
