let fs = require('fs');

const [n, ...arr] = fs.readFileSync('/dev/stdin').toString().split('\n');
//const [n, ...arr] = fs.readFileSync(__dirname + '/ex.txt').toString().split('\n');
let paper = new Array(100).fill().map(el => new Array(100).fill(false));
let result = 0;

for (let i=0; i<+n; i++){
    let [x, y]=arr[i].split(' ').map(Number);
    for (let j = 0; j < 10; j++) {
        for (let m = 0; m < 10; m++) {
            if (!paper[x + j][y + m]) {
                paper[x + j][y + m] = true;
                result+=1;
            }
        }
    }
}

console.log(result);