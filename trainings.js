//*********** */ zad.1

// const data = {
//   imie: prompt(`podaj swoje imie`),
//   nazwisko: prompt(`podaj swoje nazwisko`),
//   wiek: Number(prompt(`podaj swoj wiek`)),
// };

// if (data.wiek >= 18) {
//   document.body.innerHTML = `${data.imie} ${data.nazwisko}`;
//   console.log(data.imie, data.nazwisko);
// } else {
//   document.body.innerHTML = `za młody/a`;
//   console.log("za młody/a");
// }
//*********** */ zad.2
// const data = {
//   num1: prompt(`podaj liczbę pierwszą`),
//   znak: prompt(`podaj znak (+, -, *, /)`),
//   num2: prompt(`podaj liczbę drugą`),
// };

// if (data.znak === "+") {
//   document.body.innerHTML = Number(data.num1) + Number(data.num2);
//   console.log(Number(data.num1) + Number(data.num2));
// } else if (data.znak === "-") {
//   document.body.innerHTML = Number(data.num1) - Number(data.num2);
//   console.log(Number(data.num1) - Number(data.num2));
// } else if (data.znak === "*") {
//   document.body.innerHTML = Number(data.num1) * Number(data.num2);
//   console.log(Number(data.num1) * Number(data.num2));
// } else if (data.znak === "/") {
//   document.body.innerHTML = Number(data.num1) / Number(data.num2);
//   console.log(Number(data.num1) / Number(data.num2));
// }

//*********** */ zad.3 a

// const dane = prompt(`wpisz jakiś tekst`);

// const daneTable = [...dane];

// let i = 0;
// let length = daneTable.length;

// for (i = 0; i < length; i++) {
//   if (i % 2 === 0) {
//     console.log(daneTable[i].toUpperCase());
//   } else if (i % 2 !== 0) {
//     console.log(daneTable[i].toLowerCase());
//   }
// }

//*********** */ zad.3 b
// const number = 100;

// let n = 0;

// for (n = 0; n <= number; n++) {
//   if (n % 3 === 0) {
//     console.log(n);
//   }
// }

//*********** */ zad.4

// const num1 = prompt("podaj pierwszą liczbę");
// const num2 = prompt("podaj drugą liczbę");

// const calc = () => {
//   const sum = Number(num1) + Number(num2);
//   const rozn = Number(num1) - Number(num2);
//   const ilocz = Number(num1) * Number(num2);
//   const ilor = Number(num1) / Number(num2);

//   console.log(sum, rozn, ilocz, ilor);
// };
// calc();

//*********** */ zad.5

// const number = Number(prompt("podaj liczbę"));

// const checkNumber = function () {
//   if (number % 2 === 0) {
//     const even = number;
//     console.log(`wartość z funkcji even: ${even}`);
//   } else {
//     const odd = number;
//     console.log(`wartość z funkcji odd: ${odd * 2}`);
//   }
// };

// checkNumber();

//*********** */ zad.6

// function Obj() {
//   this.name = prompt("podaj imię ");
//   this.surname = prompt("podaj nazwisko");
// }

// const klasa = [];

// for (let i = 1; i <= 2; i++) {
//   const person = new Obj();
//   klasa.push(person);
// }

// console.log(klasa);

//*********** */ zad.7

// const obj = {
//   id: 1,
//   name: 'Tester Testowy',
//   pwdHash: 'dasdads36723526##^%3dshds**hdgh326',
//   isAdmin: true,
//   hasAvatar: true,
// }
// function filter(obj) {
//   return `${obj.id} ${obj.name} ${obj.hasAvatar}`

// }

// console.log(filter(obj))

//*********** */ zad.8

// const name = 'Smbd Test';
// const age = 35;
// const role = 'Admin';

// const info = `${name} has a role of ${role} and is born in year ${new Date().getFullYear() -age}`

// console.log(info)

//                                ******* NodeJS *******

// **stara forma - construktor
// function Person() {
//   this.sayHello = function () {
//     console.log("Hello");
//   };
// }

// const alice = new Person();

// alice.sayHello();

// class Person {
//   sayHello() {
//     console.log("Hello");
//   }
// }

// const alice = new Person();

// alice.sayHello();

// class Country {
//   constructor(currency, language, currencyConvertRatioToUsd) {
//     this.currency = currency;
//     this.language = language;
//     this.currencyConvertRatioToUsd = currencyConvertRatioToUsd;
//     this.isShengen = true;
//   }

//   convertMoney(valueInLocalCurrency) {
//     return valueInLocalCurrency * this.currencyConvertRatioToUsd;
//   }
// }

//*********** */ zad.9

// const poland = new Country(
//   (currency = "PLN"),
//   (language = "polish"),
//   (currencyConvertRatio = 1 / 4)
// );
// const souvenirInPln = 50;
// const souvenirInUsd = poland.convertMoney(souvenirInPln);

// console.log(souvenirInUsd);

// class Country {
//   constructor() {
//     this.places = [];
//   }
//   addPlace(placeNumber) {
//     this.places.push(placeNumber);
//   }

//   showIsTherheAnyFirstPlaces() {
//     for (let i = 0; i < this.places.length; i++) {
//       if (this.places[i] === 1) {
//         console.log("Brawo!");
//         break;
//       }
//     }
//   }
// }

// const poland = new Country();
// poland.addPlace((placeNumber = 1));
// poland.addPlace((placeNumber = 2));
// poland.addPlace((placeNumber = 1));
// poland.showIsTherheAnyFirstPlaces();

// const philippines = new Country();
// philippines.addPlace((placeNumber = 2));
// philippines.addPlace((placeNumber = 3));
// philippines.addPlace((placeNumber = 3));
// philippines.showIsTherheAnyFirstPlaces();

// console.log(poland);

//*********** */ TABLICE
// const numbers = [1, 2, 34, 5, 6];

// ar.forEach((num = number, i = number) => {
//   ar[i] = num + 2;
// });
// console.log(ar);

// const newNumbers = numbers.map((number = number) => {
//   return number + 2;
// });

// const newNumbers = numbers.map((num) => num + 2);

// const newNumbers = numbers.filter((num = number) => {
//   //   if (num % 2 === 0) {
//   //     return true;
//   //   } else {
//   //     return false;
//   //   }
//   return number % 2 === 0;
// });

// const newNumbersMultipledBy2 = numbers
//   .filter((num) => !(num % 2))
//   .map((num) => num * 2);

// const onlyEven = (num) => !(num % 2);
// const multiplyBy2 = (num) => num * 2;
// const show = (num) => console.log(num);

// numbers.filter(onlyEven).map(multiplyBy2).forEach(show);

// console.log(numbers);
// console.log(newNumbersMultipledBy2);

//*********** */ zad.9

// const grades = [3, 4, 5, 6, 3, 4, 2, 5, 6];

// const avgGrade = grades.map((grade = number) => {
//   let avg = 0;
//   avg = grade + grade;
//   return avg;
// });

// ar.forEach((num = number, i = number) => {
//   ar[i] = num + 2;
// });
// console.log(ar);

// const average = () => {
//   let avg = 0;
//   grades.forEach((grade = number, i = number) => {
//     avg += grades[i] / grades.length;
//   });
//   return avg;
// };

// const goodGrades = grades.filter((grade) => {
//   if (grade >= 4) {
//     return grade;
//   }
// });
// console.log(goodGrades);
// console.log(average());

//*********** */ zad.10
// const cities = [
//   "Wrocław",
//   "Poznań",
//   "Kraków",
//   "Warszawa",
//   "Katowice",
//   "Bytom",
//   "Jasna-Góra",
//   "Jastrzębie-Zdrój",
//   "Rabka-Zdrój",
// ];

// // for (i = 0; i < length; i++ ) {
// //   if (i % 2 === 0) {
// //     console.log(daneTable[i].toUpperCase());
// //   } else if (i % 2 !== 0) {
// //     console.log(daneTable[i].toLowerCase());
// //   }
// // }
// const evenNameOfCity = (city) => city.length % 2 === 0;
// const toUpper = (city) => city.toUpperCase();
// const show = (theCity) => console.log(theCity);

// cities.filter(evenNameOfCity).map(toUpper).forEach(show);

// console.log(evenNameOfCity);

//*********** */ ASYNCHRONICITY

//*********** */ zad.10
// const isbn = Number(prompt("podaj kod ISBN"));

// fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`)
//   .then((response) => response.json())
//   .then((data) => {
//     const { authors, title } = data.items[0].volumeInfo;
//     console.log(`${title} by ${authors}`);
//   })
//   .catch((err) => console.log("something is wrong", err));

//*********** */ ASYNC/AWAIT

// (async () => {
//   const data = await (await fetch("https://swapi.dev/api/people/1/")).json();
//   console.log(data);
// })();

// const { setTimeout } = require("timers/promises");
// const intervalId = setInterval(() => console.log("Cyk"), 100);
// (async () => {
//   console.log("Hi");
//   await setTimeout(1000);
//   console.log("Hello!");
//   clearInterval(intervalId);
// })();

// const { setTimeout } = require("timers/promises");

// async function brewTea() {
//   console.log("Brewing tea...");
//   await setTimeout(1000);
//   console.log("Tea is ready!");
// }
// async function orderKeyboard() {
//   console.log("Ordering and waiting for package with keyboard...");
//   await setTimeout(2000);
//   console.log("Keyboard has arrived!");
// }

// (async () => {
//   await Promise.all([brewTea(), orderKeyboard()]);

//   console.log("Finished!");
// })();

//*********** */ zad.11

// 9788375688337;
// (async () => {
//   const isbn = Number(prompt("podaj kod ISBN"));

//   const res = await fetch(
//     `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`
//   );
//   const data = await res.json();
//   const { authors, title } = data.items[0].volumeInfo;
//   console.log(`${title} by ${authors}`);
// })();

//*********** */ zad.12

// const number = document.querySelector(".number");
// const btn = document.querySelector(".btn-toggle-color");
// let counter = 0;

// btn.addEventListener("click", () => {
//   counter += 1;
//   number.innerHTML = counter;
// });

//*********** */ LOCAL STORAGE

//Get last visit date
// const lastSavedVisitDate = localStorage.getItem("last-visit");

// if (lastSavedVisitDate === null) {
//   console.log("You are first time here!");
// } else {
//   console.log(`You were here last time on ${lastSavedVisitDate}`);
// }

//Set last visit date
// const date = new Date();
// const dateString = date.toString();

// localStorage.setItem("last-visit", dateString);

// console.log(date);

// const number = document.querySelector(".number");
// const btn = document.querySelector(".btn-toggle-color");

// let counter = Number(localStorage.getItem("counter"));
// number.innerHTML = Tring(counter);

// btn.addEventListener("click", () => {
//   number.innerHTML = ++counter;
//   localStorage.setItem("counter", String(counter));
// });

////////////
// const number = document.querySelector(".number");

// const personInfo = localStorage.getItem("personInfo");

// if (personInfo === null) {
//   const name = prompt("What is your name");
//   const surname = prompt("What is your last name?");

//   const person = {
//     name,
//     surname,
//   };

//   localStorage.setItem("personInfo", JSON.stringify(person));
// } else {
//   const person = JSON.parse(personInfo);
//   const { name, surname } = person;
//   number.innerHTML = `${person.name} ${person.surname}`;
// }

//*********** */ zad.13
//My
// const feelGood = document.querySelector(".btnGood");
// const feelBad = document.querySelector(".btnBad");
// const numGood = document.querySelector(".numGood");
// const numBad = document.querySelector(".numBad");

// const obj = {
//   moodGood: localStorage.getItem("goodCounter"),
//   moodBad: localStorage.getItem("badCounter"),
// };

// if (!obj.moodGood) {
//   numGood.innerHTML = 0;
// } else {
//   numGood.innerHTML = obj.moodGood;
// }

// if (!obj.moodBad) {
//   numBad.innerHTML = 0;
// } else {
//   numBad.innerHTML = obj.moodBad;
// }

// function saveInfoGood() {
//   localStorage.setItem("goodCounter", JSON.stringify(obj.moodGood));
// }
// function saveInfoBad() {
//   localStorage.setItem("badCounter", JSON.stringify(obj.moodBad));
// }

// feelGood.addEventListener("click", () => {
//   obj.moodGood++;
//   saveInfoGood();
//   numGood.innerHTML = obj.moodGood;
// });
// // localStorage.setItem("counterGood", String(feelGood));

// feelBad.addEventListener("click", () => {
//   obj.moodBad++;
//   saveInfoBad();
//   numBad.innerHTML = obj.moodBad;
// });
//Their

//*********** */ OBIEKTY/TABLICE

// const obj = {
//   name: "Jan",
//   surname: "Kowalski",
//   age: 123,
// };

// const keys = Object.keys(obj);
// console.log(keys);

// const values = Object.values(obj);
// console.log(values);

// const entries = Object.entries(obj);

// for (const [entry] of entries) {
//   const [name, value] = entry;
//   console.log(name, value);
// }
//destr.
// for (const [name, value] of entries) {
//   console.log(name, value);
// }

// const keys = Object.keys(obj);

// for (const key of keys) {
//   console.log(key, obj[key]);
// }

// console.log(keys);

// for (const key in obj) {
//   console.log(key, obj[key]);
// }

// const ar = [1, 2, 4];

// const sum = ar.reduce((a, b) => {
//   return a + b;
// }, 0);

//destr.
// const sum = ar.reduce((a, b) => a + b, 0);
// console.log(sum);

// const ar = ["Ania", "Adam", "Emilia", "Tereska", "Gloria"];

// const names = ar.reduce((prev, curr) => {
//   if (curr[0] === "A") {
//     return `${prev} ${curr}`;
//   } else {
//     return prev;
//   }
// }, "");

//alt.
// const names = ar.filter((name) => name[0] === "A").join(" ");

// console.log(names);

// const namesLength = ar.reduce((prev, curr) => {
//   return prev + curr.length;
// }, 0);
// console.log(namesLength);

//*********** */ ERROR THROW/TRY/CATCH/FINALLY

// function pow() {
//   const num = Number(prompt("Podaj Liczbę"));

//   if (Number.isNaN(num)) {
//     throw new Error("bledna liczba");
//   }
//   return num ** 2;
// }

// try {
//   alert(`Twoja liczba do potęgi to ${pow()}`);
//   console.log("Ok");
// } catch (error) {
//   alert(`Operation failed. The reason is: ${error}`);
// } finally {
//   alert("Program zakonczono.");
// }
///////
// (async () => {
//   try {
//     const res = await fetch("...");
//   } catch (error) {
//     console.log("Something went wrong", error.message);
//   } finally {
//     console.log("fetch has finishef.");
//   }
// })();

//*********** */ USE STRICT/DEBUGGER

// "use strict";

// function F() {
//   this.name = "name";
// }

// class G {
//   constructor() {
//     // debugger;
//     this.name = "name";
//   }
// }

// const obj = new G();

//*********** */ SET/MAP

// const mySet = new Set([1, 2, 3, 3, 4, 5, 6, 3, 4, 3, 7, 8, 6, 10]);
// console.log(mySet);
// const ar = [...mySet];
// console.log(ar);

// for (const entry of mySet.entries()) {
//   console.log(entry);
// }
// for (const entry of mySet.keys()) {
//   console.log(entry);
// }
// for (const entry of mySet.values()) {
//   console.log(entry);
// }
// mySet.clear();

// const map = new Map([
//   ["cucumber", 7.5],
//   ["tomato", 3.2],
//   ["potato", 12.87],
// ]);

//alt
// map.set("cucumber", 7.5);
// map.set("tomato", 3.2);
// map.set("potato", 12.87);

// const itemToCheck = "cucumber";

// console.log("Check item is worth", map.get(itemToCheck));

//obj na Map
// const obj = {
//   cucumber: 7.5,
//   tomato: 3.2,
//   potato: 12.87,
// };
// const map = new Map(Object.entries(obj));
