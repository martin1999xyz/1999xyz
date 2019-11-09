// while loop
let result = 1;
let counter = 0;
while (counter < 10 ) {
    result = result * 2;
    counter = counter + 1;
}
console.log(result + "the result" );

// do loop - Always does once!
let yourName;
do {
	yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName);

// for loop
for (
/*  The part before the first 
    semicolon initializes the loop, 
    usually by defining a binding  */
	let number = 0; 
/*	The second part is the expression 
	that checks whether the loop must continue. */
	number <= 12; 
/*	The final part updates the state of 
	the loop after every iteration. */
	number = number + 2) {
		console.log(number);
}

// for loop doung the 10th power
let result = 1;
for (let counter = 0; counter < 10; counter = counter + 1) {
	result = result * 2;
}
console.log(result);

// breaking out of a loop
for (let current = 20; ; current = current + 1) {
/*  Using the remainder (%) operator is an easy way 
	to test whether a number is divisible by another number. 
	If it is, the remainder of their division is zero */
	if (current % 7 == 0) {
		console.log(current);
		break;
	}
}

// shortening the counting example
for (let number = 0; number <= 12; number += 2) {
	console.log(number);
}

// switch
switch (prompt("What is the weather like?")) {
	case "rainy":
		console.log("Remember to bring an umbrella.");
		break;
	case "sunny":
		console.log("Dress lightly");
		break;
	case "cloudy":
		console.log("Go outside");
		break;
	default:
		console.log("Unknown waether type");
		break;
}

/*
exercise 
Looping a triangle
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

for (let line = "#"; line.length < 8; line += "#") {	
		console.log(line);
}

/* fizzbuzz */
for (let number = 0; number <= 100; number += 1) {
	console.log(number);
	if (number % 3) {
		console.log("Fizz");
	}
	if (number % 5) {
		console.log("Buzz");
	}
	if (number % 3 && number % 5) {
		console.log("FizzBuzz");
	}
}

// the superior solution from the book 
for (let n = 1; n <= 100; n++) {
	let output = "";
	if (n % 3 == 0) output += "Fizz";
	if (n % 5 == 0) output += "Buzz";
	console.log(output || n);
}

// chessboard
let size = 8;
let board = "";

for (let x = 0; x < size; x++) {
	for (let y = 0; y < size; y++) {
		if((x + y) % 2 == 0) {
			board += " ";
		} else {
			board += "#";
		}
	}
	board += "\n";
}
console.log(board);

/*
* Functions 
*/


const square = function(x) {
	return x * x;
}
console.log(square(12));

// let and const are local to the block they are declared in
let x = 10;
if (true) {
	let y = 20;
	var z = 30;
	console.log(x + y + z);
}
console.log(x + z);

// scope - look at "n"
const halve = function(n) {
	return n / 2;
}
let n = 10;
console.log(halve(100));
console.log(n);

// Hummus and lexical scoping
const hummus = function(factor) {
	const ingredient = function(amount, unit, name) {
	  let ingredientAmount = amount * factor;
	  if (ingredientAmount > 1) {
		unit += "s";
	  }
	  console.log(`${amount} ${unit} ${name}`);
	};
	ingredient(1, "can", "chickpeas");
	ingredient(0.25, "cup", "tahini");
	ingredient(0.25, "cup", "lemon juice");
	ingredient(1, "clove", "garlic");
	ingredient(2, "tablespoon", "olive oil");
	ingredient(0.5, "teaspoon", "cumin");
  };


	function greet(who) {
		console.log("Hello " + who);
	}
// now practice from here!

	greet("Harry");
	console.log("Bye");

// aka
/*
not in function
	in greet
		in console.log
	in greet
not in function
	in console.log
not in function
*/

function findSolution(target) {
	function find(current, history) {
		if (current == target) {
			return history;
		} else if (current > target) {
			return null;
		} else {
			return find(current + 5, `(${history} + 5)`) ||
						 find(current * 3, `(${history} * 3)`);
		}
	}
	return find(1, "1");
}

console.log(findSolution(24));


find(1, "1")
  find(6, "(1 + 5)")
    find(11, "((1 + 5) + 5)")
      find(16, "(((1 + 5) + 5) + 5)")
        too big
      find(33, "(((1 + 5) + 5) * 3)")
        too big
    find(18, "((1 + 5) * 3)")
      too big
  find(3, "(1 * 3)")
    find(8, "((1 * 3) + 5)")
      find(13, "(((1 * 3) + 5) + 5)")
        //found!

// Growing functions

console.log("007 Cows");
console.log("011 Chickens");



function printFarmInventory(cows, chickens) {

	let cowString = String(cows);
	while (cowString.length < 3) {
		cowString = "0" + cowString;
	}
	console.log(`${cowString} Cows`);
	let chickenString = String(chickens);
	while (chickenString.length < 3) {
		chickenString = "0" + chickenString;
	} 
	console.log(`${chickenString} Chickens`); 
}

printFarmInventory(7, 11);
























