const students=["Senthil","Kumar","Thangaraj","Raina","Suresh"];

students.push("thainesh");
students.push("tharun");
students.push("Raina");

console.log(students);


students.unshift("Dhoni");

console.log(students.slice(1,3));


const temperature=[45,55,60,95,75];

students.forEach((student)=>
{
    console.log(student);
}
);

const highestTemperature=temperature.filter((temp)=>
{
    return temp >90;
});


const rupees=[10,20,30,40];

const USD=rupees.map((dolar)=>
{
    return rupees*83;
})



const rollnumber=[101,102,102,103,103,104,105];


const uniquerollnumber=new Set(rollnumber);

console.log(uniquerollnumber);

uniquerollnumber.add(106);

uniquerollnumber.delete(103);

console.log(uniquerollnumber.has(103));

console.log(uniquerollnumber.size);

const student=new Map();

student.set(1,"Arthi");
student.set(2,"Bala");
student.set(3,"suresh");
student.set(4,"senthil");

console.log(student.get(4));  //ha  delete   clear  size.

