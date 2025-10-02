for (let x = 0; x < 10; x++) {
  console.log(x);
}

for (let x = 1; x < 20; x += 3) {
    console.log(x);
}

for (let x = 11; x < 2; x++) {
    console.log(x);
}
console.log("The for loop has ended");
console.log("Continue code execution");


//Head and Tails

let heads = 0;
let tails = 0;
for (x = 1; x <= 10; x++) {
    if (Math.random() < 0.5) {
        tails++;
    } else {
        heads++;
    }
}

console.log("Tossed the coin ten times");
console.log(`Number of heads: ${heads}`);
console.log(`Number of tails: ${tails}`);