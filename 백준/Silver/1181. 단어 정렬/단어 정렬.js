let fs = require('fs');

const numbers = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//const numbers = fs.readFileSync(__dirname+'/ex2.txt').toString().split('\n');

let n = Number(numbers[0]);
let input = numbers.slice(1);


let setlist = [...(new Set(input))];
setlist.sort((a, b) => {
    if (a.length === b.length) {
        if (b > a) return -1;
    }
    return a.length - b.length
});

for (const i of setlist) {
    console.log(i)
}