//     charAt();

let username = "kiran kumar";
console.log(`charAt() : ${username.charAt(4)}`);

//    IndexOf();

let indexof = "kiran kumar";
console.log(`indexof() : ${indexof.indexOf("r")}`);

//    length();

let name = "kiran kumar";
console.log(`length() : ${name.length}`);

//   lastindexof();

let lastindexof = "kiran kumar";
console.log(`last index of() : ${lastindexof.lastIndexOf("a")}`);

//   trim();

let trim = " kiran  kumar ";
console.log(trim);
console.log(`trim length() : ${trim.length}`);
console.log(`trim() : ${trim.trim()}`);

//   repeat();

let repeat = "kiran kumar";
console.log(`repeat : ${repeat.repeat(2)}`);

//    start with();
//    end with();

let startwith = "kiran kumar";
let endwith = "kiran kumar";
console.log(`start with : ${startwith.startsWith("k")}`);
console.log(`start with : ${endwith.endsWith("kumar")}`);

//    replaceAll();

let phoneNumber = " 123-456-789 ";
let unm = "kiran kumar";
console.log(`repeat all : ${phoneNumber.replaceAll("-", "")}`);
console.log(`repeat all : ${unm.replaceAll("kiran", "pavan")}`);

//   padstart();

let ph_no = "123-456-789";
console.log(`phone no: ${ph_no.padStart(15, "1")}`);

//  padEnd();

console.log(`padend : ${ph_no.padEnd(15, "0")}`);

//   sliceing();

const fullname = "kiran kumar";
const firstname = fullname.slice(0, 2);
console.log(`firstname : ${firstname}`);

let lastname = fullname.slice(-2);
console.log(`lastname : ${lastname}`);

let slicing = fullname.slice(1, fullname.indexOf(" "));
console.log(`slicing : ${slicing}`);

const email = "kirankumar123@gmail.com";
let usname = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);
console.log("username indexof : " + usname);
console.log("extension indexof:  " + extension);
