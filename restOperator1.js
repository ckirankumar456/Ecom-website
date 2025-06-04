// function fun(a, b) {
//   return a + b;
// }
// console.log(fun(1, 2));
// console.log(fun(1, 2, 3, 4, 5));

// function fun(...input) {
//   let sum = 0;
//   for (let i of input) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(fun(1, 2));
// console.log(fun(1, 2, 3));
// console.log(fun(1, 2, 3, 4, 5));

// function fun(a, b, ...c) {
//   console.log(`${a} ${b}`);
//   console.log(c);

//   console.log(c[0]);
//   console.log(c.length);
//   console.log(c.indexOf("Lionel"));
// }
// fun("Mukul", "Latiyan", "Lionel", "Messi", "Barcelona");

// const a = [10, 20, 30, 40];
// console.log("example 1");
// const [x, y, z, w] = a;
// console.log(x);
// console.log(y);
// console.log(z);
// console.log(w);

// const [p, q, , r] = a;
// console.log("example 2");
// console.log(p);
// console.log(q);
// console.log(r);

// const [s, t] = a;
// console.log("example 3");
// console.log(s);
// console.log(t);

// let [fst, , ...last] = ["a", "b", "c", "b"];
// console.log(fst);
// console.log(last);

// let x = 10,
//   y = 20;
// [x, y] = [y, x];
// console.log(x);
// console.log(y);

// function NameList() {
//   return ["a", "b", "c", "d"];
// }
// let [fst, snd] = NameList();
// console.log(fst);
// console.log(snd);

// let marks = { x: 21, y: -32, z: 47 };
// const { x, y, z } = marks;
// console.log(x);
// console.log(y);
// console.log(z);

// ({ x, y } = { x: 10, y: 20 });
// console.log(x);
// console.log(y);

// ({ x, y, ...restof } = { x: 10, y: 20, m: 30, n: 40 });
// console.log(x);
// console.log(y);
// console.log(restof);

// const marks = {
//   section1: { alpha: 15, beta: 16 },
//   section2: { alpha: -13, beta: 19 },
// };
// const {
//   section1: { alpha: alpha1, beta: beta1 },
// } = marks;
// console.log(alpha1, beta1);

let obj = {
  name: "GFG",
  add: {
    country: "India",
    state: {
      code: "JS",
      pincode: "434354",
      article: {
        topic: "destucturing",
      },
    },
  },
};

let {
  add: { country: abcd },
} = obj;

let {
  add: {
    state: { code: cd },
  },
} = obj;

let {
  add: {
    state: {
      article: { topic: ef },
    },
  },
} = obj;

console.log(ef);
