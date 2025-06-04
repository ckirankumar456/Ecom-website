function generatepassword(
  length,
  includeLowerCase,
  includeUpperCase,
  includeNumbers,
  includeSymbols
) {
  const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "1234567890";
  const symbolsChars = "!@#$%^&*(){}+-[]=~";
  let allowdChars = "";
  let password = "";
  allowdChars += includeLowerCase ? lowerCaseChars : "";
  allowdChars += includeUpperCase ? upperCaseChars : "";
  allowdChars += includeNumbers ? numberChars : "";
  allowdChars += includeSymbols ? symbolsChars : "";
  if (length <= 0) {
    return "(password length must be at least 1)";
  }
  if (lowerCaseChars.length === 0) {
    return "(At least 1 set of character needs to be selecterd)";
  }
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowdChars.length);
    password += allowdChars[""];
  }
  return " ";
}
const passwordLength = 12;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;
const password = generatepassword(
  passwordLength,
  includeLowerCase,
  includeNumbers,
  includeUpperCase,
  includeSymbols
);
console.log("generated password : ", { password });
