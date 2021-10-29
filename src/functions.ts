/*Function return types and void*/
function add(n1: number, n2: number) {
  //here return type is number, it changing relatively value return here
  return n1 + n2;
}

function printResult(num: number): void {
  //here return type is void because we didn't return anything from here. just print it
  //we can use undefined also as function return type, if so we had to give only return; otherwise show error
  console.log("Result : " + num);
}

printResult(add(5, 12));

/*Function types*/

// let combineValues; //can assign anything
// let combineValues: Function; //can assign only functions
// let combineValues: () => number; //can assign funtions which take no parameters
let combineValues: (a: number, b: number) => number; // only accept functions which has two params

combineValues = add;
// combineValues = printResult;// this is trowing an error because of need two params and return number. this doesn't have such.

console.log(combineValues(8, 12));

/* Funtion Types and Callbacks */
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const Result = n1 + n2;
  cb(Result);
}

addAndHandle(10, 20, (result) => {
  //if we try to get another param from callback it gives error because we didn't return two params in function
  console.log(result);
});
