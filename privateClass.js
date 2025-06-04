// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }
//   set width(newwidth) {
//     if (newwidth > 0) {
//       this._width = newwidth;
//     } else {
//       console.error("width must be a positivee number");
//     }
//   }
//   set height(newheight) {
//     if (newheight > 0) {
//       this._height = newheight;
//     } else {
//       console.error("height must be a positive number");
//     }
//   }
//   get width() {
//     return this._width;
//   }
//   get height() {
//     return this._height;
//   }
// }
// const rectangle = new Rectangle(3, 4);
// rectangle.width = -100;
// rectangle.height = "pizza";
// console.log(rectangle.width);
// console.log(rectangle.height);

class bankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }
  getBalance() {
    return this.balance;
  }
  deposite(amount) {
    if (amount > 0) {
      this._balance += amount;
    }
  }
  withdraw(amount) {
    if (amount <= this._balance) {
      this._balance -= amount;
      console.log(`withdraw: $${amount}`);
    } else {
      console.log("insufficient balance");
    }
  }
}
const account = new bankAccount("kiran", 1000);
account.deposite(500);
account.withdraw(300);
console.log(account.getBalance());
