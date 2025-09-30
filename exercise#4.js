let colours = ['red', 'green', 'blue'];
colours.push('black');
console.log(colours);
colours.shift();
[colours[0], colours[1]] = [colours[1], colours[0]];
console.log(colours);
colours.unshift('yellow');
console.log(colours);
