let product = new Map();
product.set("pCode", "1001").set("pName", "apple").set("price", 45);

product.forEach((v, k, m) => {
  console.log(`${v},${k}`);
});
