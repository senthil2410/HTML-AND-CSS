const Person=
{
    name:["Senthil","Kumar"],
    age:23,
    introduce:function()
    {
        console.log(`Hi this is ${this.name[0]}`);
    }
}

console.log(Person.name);


const person1=
{
    name:{first:"baby",last:"sudha"},
    age:49,
     greet:function()
    {
        console.log(`Hi this is ${person1["name"]["last"]}`);
    }
}


console.log(person1["name"]);

console.log(person1["name"]["last"]);

function employee(name)
{
    const obj={};
    obj.name=name;
    obj.introduce=function()
    {
         console.log(`Hi this is ${this.name}`)
    }
    return obj;
}

const suchind=employee("Suchind");
suchind.introduce();



function employeeData(name)
{
    
    this.name=name;
    this.introduce=function()
    {
         console.log(`Hi this is ${this.name}`)
    }
}

const kumar=new employeeData("kumar");
kumar.introduce();




class Student{
    id;
    name;
    dept;

    constructor(id,name,dep)
    {
        this.id=id;
        this.name=name;
        this.dept=dep;
    }

    getStudent()
    {
        console.log(`The studdent name is ${this.name} and dept is ${this.dept}`);
    }
}

let student1=new Student(1,'Senthil','EI');
student1.getStudent();




class Account
{
    balance=100;

    deposit(amount)
    {
        this.balance+=amount;
    }
    withDraw(amount)
    {
        this.balance-=amount
    }
    getBalance()
    {
        return this.balance;
    }
}

const acc=new Account();
acc.deposit(500);
acc.withDraw(200);
console.log(acc.getBalance());




class User
{

    name;
    constructor(name)
    {
        this.name=name;
    }

    login()
    {
        console.log(`${this.name} logged in`);
    }
}

class Admin extends User
{
    logout(user)
    {
        console.log(`${this.name} has deleted ${user.name}`);
    }
}

const user=new User("rAVI");

user.login();


const admin=new Admin("Kumar");
admin.login();
admin.logout(user);



class Domain
{
    learn()
    {
        console.log("leraning programming")
    }
}


class Java extends Domain{
    learn()
    {
        console.log("learning java")
    }
}


let s1=new Domain();
let s2=new Java();

s1.learn();
s2.learn();