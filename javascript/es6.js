function outerFunction()
{
    const name="Senthil";
    function innerFunction()
    {
        console.log(name);
    }
    return innerFunction;
}

const clousre=outerFunction();

clousre();



// nested array


const marks=[90,95,[65,60],[55,[40,35]]];

console.log(marks.flat(1));

console.log(marks.flat(2));

console.log(marks.flat(3));



// spread and rest operator


const nums = [5, 10, 15];

console.log(Math.max(...nums));  



const studentAge={senthil:23,kumar:22}

const Age={...studentAge,thangaraj:55};
S
console.log(Age)