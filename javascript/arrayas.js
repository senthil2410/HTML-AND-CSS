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


