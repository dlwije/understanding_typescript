//Type aliases {we can create a new type in ts in this way}
type Combinable = number | string;

function typeCombine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: string
) {}

//Union types
//Literal types
//end param of this method use for make literal type
function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: string
) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  if (resultConversion === "as-number") {
    return +result;
  } else return result.toString();
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);
