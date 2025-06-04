/*function other() {
  let message = "hello";
  function inner() {
    console.log(message);
  }
  inner();
}
other();*/

/*function creatCounter() {
  let count = 0;
  function increase() {
    count++;
    console.log("count increase to " + count);
  }
  function getcount() {
    return count;
  }
  return { increase, getcount };
}
const counter = creatCounter();
counter.increase();
counter.increase();
counter.increase();
console.log("The current count is " + counter.getcount());
*/

// function createGame() {
//   let score = 0;
//   function increaseScore(points) {
//     score += points;
//     console.log("+ " + points + " pts");
//   }
//   function decreaseScore(points) {
//     score -= points;
//     console.log("- " + points + " pts");
//   }
//   function getScore() {
//     return score;
//   }
//   return { increaseScore, decreaseScore, getScore };
// }
// const game = createGame();
// game.increaseScore(8);
// game.increaseScore(6);
// game.decreaseScore(5);
// console.log("the final score is " + game.getScore() + " pts");

// function createGame() {
//   let score = 0;
//   function increaseScore(points) {
//     score += points;
//     console.log(`+ ${points} pts`);
//   }
//   function decreaseScore(points) {
//     score -= points;
//     console.log(`- ${points} pts`);
//   }
//   function getScore() {
//     return score;
//   }
//   return { increaseScore, decreaseScore, getScore };
// }
// const game = createGame();

// game.increaseScore(5);
// game.increaseScore(6);
// game.decreaseScore(3);
// console.log(`the final score is ${game.getScore()} pts`);

// function creatCounter() {
//   let count = 0;
//   function increment() {
//     count++;
//     console.log(`count increase to ${count}`);
//   }
//   function getcount() {
//     return count;
//   }
//   return { increment, getcount };
// }
// const counter = creatCounter();
// counter.increment();
// counter.increment();
// counter.increment();
// console.log(`the current count is ${counter.getcount()}`);

// function creatCounter() {
//   let count = 0;
//   function increment() {
//     count++;
//     console.log("count : ", count);
//   }
//   // function getCount() {
//   //   return count;
//   // }
//   return increment;
// }
// const counter = creatCounter();
// counter();
// counter();
// console.log("total : " + getCount());

// function outerFunction() {
//   let outerVariable = "i am outerVariable";
//   function innerFunction() {
//     console.log(outerVariable);
//   }
//   return innerFunction;
// }
// const closureFunction = outerFunction();
// closureFunction();

// function parent() {
//   const asthi = 100000;
//   function child() {
//     return asthi;
//   }
//   return child;
// }
// const bittu = parent();
// console.log(bittu());

// function createCounter() {
//   let count = 0;

//   return function () {
//     count++;
//     console.log("count ", count);
//   };
// }
// const counter = createCounter();
// counter();
// counter();

// function creatCounter() {
//   let count = 0;
//   let add = 0;
//   function func1() {
//     count++;
//     add += count;
//     console.log("count ", count);
//   }
//   function getCount() {
//     return count;
//   }
//   return { func1, getCount };
// }
// const counter = creatCounter();
// counter.func1();
// counter.func1();
// counter.func1();
// counter.func1();

// console.log("total count : " + counter.getCount());

// function ticketAmout() {
//   let count = 0;
//   function increaseAmount(amount) {
//     count += amount;
//     if (45 < count) {
//       return count - amount;
//     }
//   }
//   function decreaseAmount(amount) {
//     count -= amount;
//     if (45 > count) {
//       console.log(`ticket rate 45 remaining amount ivvandi`);
//     }
//   }
//   return { increaseAmount, decreaseAmount };
// }
// const user = ticketAmout();
// const remainAmount = user.increaseAmount(50);
// console.log(`take money ticket rate 45 eh remain money ${remainAmount}`);
