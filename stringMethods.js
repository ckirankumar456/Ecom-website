// Example string
const str = "  JavaScript is awesome!  ";
const str2 = "Hello, JavaScript!";
const str3 = "apple,banana,grape";
console.log(str.length); //

// 1. charAt(): Get character at a specific index
// console.log("Character at index 4:", str.charAt(4)); //
// // 2. charCodeAt(): Get Unicode of character at index
// console.log("Unicode of character at index 4:", str.charCodeAt(4)); //

// // 3. concat(): Concatenate strings
// console.log("Concatenated String:", str.concat(" ", str2, ":-)")); //

// // 4. endsWith(): Check if string ends with a specific substring
// console.log("Ends with 'awesome!':", str.endsWith("awesome!")); //

// // 5. includes(): Check if string contains a substring
// console.log("Includes 'is':", str.includes("is")); //

// // 6. indexOf(): Find the first occurrence of a substring
// console.log("Index of 'is':", str.indexOf("is")); //

// // 7. lastIndexOf(): Find the last occurrence of a substring
// console.log("Last Index of 'is':", str.lastIndexOf("is")); //
// // 8. match(): Match a regular expression
// console.log("Match vowels:", str.match(/[aeiou]/g)); //

// // 9. replace(): Replace substring or pattern
// console.log("Replace 'awesome' with 'cool':", str.replace("awesome", "cool")); //

// // 10. search(): Search for a substring with regex
// console.log("Search for 'JavaScript':", str.search("is")); //
// // 11. slice(): Extract a portion of the string
// console.log("Slice (2, 10):", str.slice(2, 10)); //

// // 12. split(): Split the string into an array
// console.log("Split by ',':", str3.split(",")); //

// // 13. startsWith(): Check if string starts with a specific substring
// console.log("Starts with 'Java':", str.startsWith("Java")); //

// // 14. substr(): Extract part of string (deprecated but still works)
// console.log("Substring (2, 10):", str.substr(2, 8)); // Output: "JavaScri"
// // 15. substring(): Extract part of string
// console.log("Substring (2, 10):", str.substring(2, 10)); // Output: "JavaScri"
// // 16. toLowerCase(): Convert to lowercase
// console.log("Lowercase:", str.toLowerCase()); // Output: "  javascript is awesome!  "
// // 17. toUpperCase(): Convert to uppercase
// console.log("Uppercase:", str.toUpperCase()); // Output: "  JAVASCRIPT IS AWESOME!  "
// // 18. trim(): Remove whitespace from both ends
// console.log("Trimmed String:", str.trim()); // Output: "JavaScript is awesome!"
// // 19. trimStart(): Remove whitespace from the start
// console.log("Trim Start:", str.trimStart()); // Output: "JavaScript is awesome!  "
// // 20. trimEnd(): Remove whitespace from the end
// console.log("Trim End:", str.trimEnd()); // Output: "  JavaScript is awesome!"
// // 21. padStart(): Pad the start of the string
// console.log("Padded Start (length 30):", str.trim().padStart(30, "*")); // Output: "*****JavaScript is awesome!"

// // 22. padEnd(): Pad the end of the string
// console.log("Padded End (length 30):", str.trim().padEnd(30, "*")); // Output: "JavaScript is awesome!*****"
// // 23. repeat(): Repeat the string
// console.log("Repeat 3 times:", "Ha!".repeat(3)); // Output: "Ha!Ha!Ha!"
// // 24. valueOf(): Return primitive value of string object
// console.log("Value Of String:", str.valueOf()); // Output: "  JavaScript is awesome!  "
// // 25. length: Get the length of the string
// console.log("Replace All:", str.replaceAll(" ", ""));
