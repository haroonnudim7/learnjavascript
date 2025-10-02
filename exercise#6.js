let rows = 5;

for (let i = 1; i <= rows; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += "*";
    }
    console.log(pattern);
}

console.log("");
let rows2 = 5;

for (let i = rows; i >= 1; i--) {
  console.log("*".repeat(i));
}