// let product = new Map();
// product.set("pCode", "1001");
// product.set(1, "apple");
// product.set(true, "available");
// console.log(product);

// let product = new WeakSet();
// let obj = {};
// let obj1 = {};
// let obj2 = {};
// product.add(obj, 1001);
// product.add(obj1, 1002);
// product.add(obj2, 1003);
// console.log(product.has(obj));
// console.log(product.has(obj1));
// console.log(product.has(obj2));

// let product = new WeakMap();
// let obj = {};
// product.set(obj, 1001);
// console.log(product.get(obj));

// let product = new WeakMap();
// product.set("pCode", 1001);
// console.log(product);

// let names = new Set();
// names.add("First");
// names.add("Second");
// names.add("Third");
// console.log(names.size);
// names.delete("First");
// console.log(names.size);
// names.clear();
// console.log(names.size);

// let names = new Set();
// names.add("First");
// names.add("Second");
// names.add("Third");
// names.forEach((v1, v2, s) => {
//   console.log(v1, v2);
// });

// let names = new Set();
// names.add("first");
// names.add("second");
// names.add("third");
// for (let v of names) {
//   console.log(v);
// }

// let names = new Set(["first", "second", "third"]);
// names.add("first");
// console.log(names);
// console.log(names.size);

// let names = new Set();
// names.add("first");
// names.add("second");
// names.add("third");
// names.add("first");
// console.log(names);
// console.log(names.size);

// let product = new Map();
// product.set("pCode", "1001").set(1, "apple").set(true, "available");
// console.log(product);

// for (let k of product.keys()) {
//   console.log(k);
// }

// for (let v of product.values()) {
//   console.log(v);
// }

// for (let e of product.values()) {
//   console.log(e);
// }

// for (let [ek, ev] of product.entries()) {
//   console.log(ek, ev);
// }

// let obj = {
//   pCode: 1001,
//   pName: "orange",
//   price: 45,
// };

// let m = new Map(Object.entries(obj));
// console.log(m);

// let product = new Map();
// product.set("pCode", "1001").set("pName", "apple").set("price", 45);

// let obj = Object.fromEntries(product.entries());
// console.log(obj);

// let product = new Map();
// product.set("pCode", "1001").set("pName", "apple").set("price", 45);

// console.log(product.has("pCode"));

// let product = new Map();
// product.set("pCode", "1001").set("pName", "apple").set("price", 45);
// product.forEach((v, k, m) => {
//   console.log(`${v},${k}`);
// });

