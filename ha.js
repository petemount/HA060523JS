//Aufgabe 1: 2 Zahlen add. u. mit ArrowFunktion ausgeben:
const a = 2;
const b = 5;

add = (a, b) => a + b;

console.log(add(a, b));

// Aufgabe 2:
//Verwende eine Arrow Function in Kombination mit der Array-Methode .filter(),
// um ein Array von Zahlen zu filtern und nur diejenigen Zahlen zurückzugeben,
// die größer als 10 sind.
//
let numbers = [5, 11, 8, 20, 7, 15];

const numGeZehn = numbers.filter((bla) => bla > 10);

console.log(numGeZehn);
console.log(numbers);

// Aufgabe 3.
// Du hast ein Array von StringList:
// Erzeuge ein neues Array in dem alle Tiere in ausschließlich in Großbuchstaben geschrieben sind.
// Erzeuge ein neues Array in dem alle Tiere in ausschließlich in Kleinbuchstaben geschrieben.

let animals = ["Lion", "Tiger", "Elephant", "Giraffe", "Zebra"];

const animalGroß = animals.map((zwi1) => zwi1.toUpperCase());
const animalKlein = animals.map((zwi2) => zwi2.toLowerCase());

console.log(animalGroß);
console.log(animalKlein);

//Aufgabe 4:
// Du hast ein Array von Objekten, bei dem jedes Objekt eine Person mit einem Namen und Alter
// Verwende eine Arrow Function mit der .map() Methode, um ein neues Array zu erstellen,
// das nur die Namen der Personen enthält.

let people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

let nameonly = people.map((zwi3) => zwi3.name);

console.log(nameonly);
