<<<<<<< HEAD
let generateNumber = (Account) => {
  let lastNumber = Account.slice - 2;
  let maskNumber = "*".repeat;
};
=======
//local storage set
// localStorage.setItem("name", "jhon");
// localStorage.setItem("token", response.authToken);
// localStorage.setItem("token1", "122reweryrttylghfkjgdfjfoiaefweewfsa");
// localStorage.setItem("user", JSON.stringify(user));
// localStorage.setItem("token2", JSON.stringify(authToken));

// //local storage get
// let token = localStorage.getItem("token");
// let user = localStorage.getItem("user", JSON.parse(user));
// return user.name

let generateNumber = (Account) => {
  // let str = Account.toString();
  let lastNumber = str.slice(-2);
  let maskNumber = "*".repeat(str.length - 2);
  return maskNumber + lastNumber;
};
const Account = "1234567890";
const maskValue = generateNumber(Account);
console.log(maskValue);
>>>>>>> f1358e018ed02eae71cf48a2b9ebd7b0b42e6ab6
