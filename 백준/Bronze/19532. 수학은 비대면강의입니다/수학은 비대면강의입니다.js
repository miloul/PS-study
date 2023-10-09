const fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().split("\n");
//let input = fs.readFileSync(__dirname+'/ex2.txt').toString().split("\n");
let [a, b, c, d, e, f] = input[0].split(' ').map(Number);

// a, d가 0이면 불가
// const y= (c*d-f*a)/(b*d-e*a); 
// const x= (c-y*b)/a;

//브루트포스
let x = y = 0;
for (let i = -999; i <= 999; i++){
    for (let j = -999; j <= 999; j++) {
        let k = i * a + b * j;
        let l = i * d + e * j;
        if (k == c && l == f) {
            x = i;
            y = j;
            break;
        } 
    }
}

console.log(x, y);