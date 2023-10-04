const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
//let input = fs.readFileSync(__dirname+'/example.txt').toString().split("\n");

let [n, m] = input[0].split(' ').map(item=>Number(item));

let basket = [];
for(let i=1; i<=n; i++){
    basket.push(i);
};


for(let i=1; i<=m; i++){
    let [a, b] = input[i].split(' ').map(item=>Number(item));
    let arr = [];

    for(let j=a-1; j<b; j++){
        arr.push(basket[j]);
    }
    arr.reverse();

    basket.splice(a-1, b-a+1, ...arr); //basket을 splice로 짤라내고 그자리에 뒤집힌temp을 집어 넣기
}

console.log(basket.join(' '));