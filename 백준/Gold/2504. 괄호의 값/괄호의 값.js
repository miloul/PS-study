let fs = require('fs');

const inputs = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//const inputs = fs.readFileSync(__dirname+'/ex2.txt').toString().split('\n');

const input = inputs[0].split('');
let stack = [];
let answer = 0;
let tmp = 1;
let before = '';

for (const i of input) {
    if (i === "(") {
        stack.push(i);
        tmp *= 2;
    }
    else if (i === "[") {
        stack.push(i);
        tmp *= 3;
    }
    else if (i === ")") {
        if (stack[stack.length-1] !== "(" || stack.length === 0){
            answer = 0;
            break;
        } else if (before === "(") {
            answer += tmp;
        }
        stack.pop();
        tmp /= 2;
    }
    else if (i === "]") {
        if (stack[stack.length-1] !== "[" || stack.length === 0){
            answer = 0;
            break;
        } else if (before === "[") {
            answer += tmp;
        }
        stack.pop();
        tmp /= 3;
    }
    before = i;
}

if (stack.length !== 0) { //스택이 비지 않았으면
    answer = 0;
}

console.log(answer);