
// function add1(num1:number, num2:number){

// }

/* in array function way */
// const add1 = (a:number, b:number) => {
//     return a + b;
// }

//if there are only one thing inside function we can use this way as well
//we can set default argument for func params also in modern js ex- b:number = 1
const add1 = (a:number, b:number) => a + b;



//number and string is the function param types
//here void is the function return type
//output is the function parameter -> we can use this way only there is one param. otherwise need parenthesis
//last is function body -> if there are more blocks other than one then need body also parenthesis
/* const printOutput: (a: number | string) => void = output => console.log(output);

const button = document.querySelector('button');

if(button)
button.addEventListener('click', event => console.log(event));

printOutput(add1(10,25)); */

/* Spread operator */
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

//instead of hobbies[0], hobbies[1], we can use three dots to pull out all array values
activeHobbies.push(...hobbies);

//it apply to object as well in same way
const person1 = {
    firstName: 'Max',
    age: 30
};

//in below way we can  take all value pares to the copied variable
const copiedPerson = { ...person1 };

/* Rest parameters */
//we can give this way to accept any number of parameters. this will merge all params to given name(can give any name) to parameter array passed 
const addNums = (...numbers:number[]) => 
{
    //reduce also works as a normal for loop. but this will not work for empty values
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);

};

const addedNumbers = addNums(5, 10, 2, 3.7);
console.log(addedNumbers)

/* Destructuring of an array */
//we can specify name wise for indexes in array and if there are any than than we can add it to a rest param. by doing that we can take array values to a each variable
const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobbies, hobby1, hobby2);

/* Destructuring of an object */
//the names are must be same as object inside param names. But, we can overload by setting as firstName:userName. this not type assignment. simple js
//after overload(changed) firstName into userName we can't use firstName again
const { firstName: memName, age } = person1;

console.log(memName, age, person1);