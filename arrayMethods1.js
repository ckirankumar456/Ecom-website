let numbers = [10, 20, 30, 40, 50];
// 1. push() - Add elements to the end
// numbers.push(60);
// console.log("After push:", numbers);
// // 2. pop() - Remove the last element
// numbers.pop();
// console.log("After pop:", numbers);
// // 3. shift() - Remove the first element
// numbers.shift();
// console.log("After shift:", numbers);
// // 4. unshift() - Add elements to the beginning
// numbers.unshift(10);
// console.log("After unshift:", numbers);
// // 5. concat() - Combine two arrays
// let moreNumbers = [60, 70];
// let combined = numbers.concat(moreNumbers);
// console.log("After concat:", combined);
// // 6. slice() - Extract a portion of an array
// let sliced = numbers.slice(2, 5);
// console.log("After slice:", sliced);

// // 7. splice() - Add/remove elements at a specific position
// numbers.splice(2, 1, 25);
// // Replaces element at index 2
// console.log("After splice:", numbers);
// // 8. forEach() - Iterate over each element
// numbers.forEach((num) => console.log("forEach:", num));

// // 9. map() - Create a new array with modified elements
// let doubled = numbers.map((num) => num * 2);
// console.log("After map (doubled):", doubled);
// // 10. filter() - Create a new array with elements matching a condition
// let filtered = numbers.filter((num) => num > 30);
// console.log("After filter:", filtered);
// // 11. reduce() - Accumulate values into a single result
// let sum = numbers.reduce((acc, num) => acc + num, 0);
// console.log("After reduce (sum):", sum);
// // 12. find() - Find the first element matching a condition
// let found = numbers.find((num) => num > 30);
// console.log("After find:", found);

// // 13. findIndex() - Find the index of the first element matching a condition
// let foundIndex = numbers.findIndex((num) => num > 40);
// console.log("After findIndex:", foundIndex);
// // 14. includes() - Check if an array contains a specific element
// console.log("Includes 50?", numbers.includes(50));
// // 15. indexOf() - Find the index of a specific element
// console.log("Index of 50:", numbers.indexOf(50));
// // 16. some() - Check if at least one element satisfies a condition
// let someAbove50 = numbers.some((num) => num > 30);
// console.log("Some elements above 50?", someAbove50);
// // 17. every() - Check if all elements satisfy a condition
// let allAbove5 = numbers.every((num) => num > 6);
// console.log("All elements above 5?", allAbove5);
// // 18. sort() - Sort the array (ascending by default)
// numbers.sort((a, b) => a - b);
// console.log("After sort:", numbers);
// // 19. reverse() - Reverse the array
// combined.reverse();
// console.log("After reverse:", combined);
// // 20. join() - Create a string from array elements
// let joined = numbers.join(" - ");
// console.log("After join:", joined);
// // 21. flat() - Flatten nested arrays
// let nestedArray = [1, [2, 3], [4, [5, 6]]];
// console.log("After flat:", nestedArray.flat(2));
