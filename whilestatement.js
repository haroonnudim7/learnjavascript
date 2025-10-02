let i = 0;

while (i < 6) {
    console.log(`The value of i = ${i}`);
    i++;
}

// Heads and Tails While Loop

let flips = 0;
let isHeads = false;

while(!isHeads) {
    flips++;
    isHeads = Math.random() < 0.5;
}

console.log(`It took ${flips} flips to get heads 5 times.`);