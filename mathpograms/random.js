/*let radomnumber = Math.random();
console.log(radomnumber); //output :- 0.45665455

/*let radomnumber = Math.floor(Math.random());
console.log(radomnumber);   //output :- 0

/*let radomnumber = Math.floor(Math.random() + 100) + 1;
console.log(radomnumber);*/ // output :- 101

/*const min = 50;
const max = 100;
let radomnumber = Math.floor(Math.random() * max - min) + min;
console.log(radomnumber);*/

const mybutton = document.getElementById("mybutton");
const mylabel = document.getElementById("mylabel");
const max = 6;
let radomnumber;
const min = 1;
mybutton = onclick = function () {
  radomnumber = Math.floor(Math.random() * max) + min;
  mylabel.textContent = radomnumber;
};
