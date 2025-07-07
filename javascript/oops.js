class Student{
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


// Encapsulation


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



//Inheritance

class User
{
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
(admin.logout(user));



