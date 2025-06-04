let product = new Map();
product.set("pCode", "1001").set("pName", "apple").set("price", 34);

let obj = Object.fromEntries(product.entries());
console.log(obj);
