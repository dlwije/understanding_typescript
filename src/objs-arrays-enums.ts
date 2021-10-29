//object
// const person: {
//     name: string,
//     age: number,
//     hobbies: string[],
//     role: [number, string] //Tuples
// } = {
//     name: 'Dinesh',
//     age:25,
//     hobbies: ['Sports', 'Cooking'], //array
//     role: [2, 'auther']
// };

//enum
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHER,
}

const person = {
  name: "Dinesh",
  age: 25,
  hobbies: ["Sports", "Cooking"], //array
  role: Role.ADMIN,
};

//array
let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

//array for loop
for (const hobby of person.hobbies) {
  console.log(hobby.toLowerCase());
}

if (person.role === Role.AUTHER) console.log("is auther");
