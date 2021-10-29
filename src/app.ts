/* the unknown type */
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";
// userName = userInput; // we cannot assign directly unkown type value to string or number etc variable, we had to check type by if to assign it.

if (typeof userInput === "string") {
  userName = userInput;
}

/* Never type */
//the return type is never. it is added newly
function generateError(message: string, code: number) {
  throw { message: message, errorCode: code };
}

const result = generateError("An error occured!", 500);
