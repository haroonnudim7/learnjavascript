function greet(name, weather) {
    console.log(`Hello, ${name}!`);
    console.log(`It's ${weather} today right?`);
}
greet("Alice", "rainy");

function sum (a, b) {
    return a +b;
}
let result = sum(3, 5);
console.log(result);

// Return Statement
function checkAge(age) {
    if (age > 18) {
        return "You may get a car license";
    }
    return "You may not get a car license";
}
console.log(checkAge(20));
console.log(checkAge(16));

function greet() {
    console.log("Hi");
    return;
    console.log("Goodbye");
}
greet();
