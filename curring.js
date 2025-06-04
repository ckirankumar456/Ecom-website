function multiple(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}
console.log(multiple(2)(3)(4));
