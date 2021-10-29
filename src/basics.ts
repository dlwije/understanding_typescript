function addB(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;

  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

const number1 = 5;
const number2 = 2.8;
const printResultBool = true;
const resultPhrase = "Result is: ";

addB(number1, number2, printResultBool, resultPhrase);
