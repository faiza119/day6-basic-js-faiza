function greetUser(name) {
  alert("Welcome, " + name + "!");
  console.log("Welcome, " + name + "!");
}

function square(number) {
  return number * number;
}

let userName = prompt("Enter your name:");
let numberInput = parseFloat(prompt("Enter a number to find its square:"));

greetUser(userName);

let result = square(numberInput);
alert("The square of " + numberInput + " is: " + result);
console.log("Square:", result);
