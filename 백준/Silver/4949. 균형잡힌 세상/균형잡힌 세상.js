let fs = require('fs');

const inputs = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//const inputs = fs.readFileSync(__dirname+'/ex2.txt').toString().split('\n');

for (const input of inputs) {
    let stack = [];
    let result = '1';

    if (input === '.') break;
    for (let i = 0; i < input.length; i++) {
        if (input[i] === "(" || input[i] === "[") {
            stack.push(input[i]);
        }
        else if (input[i] === ")" || input[i] === "]") {
            if (stack.length === 0) {
                result = 'no'
                break;
            }
            else if (input[i] === ")" && stack[stack.length - 1] === "("){
                stack.pop();
            }
            else if (input[i] === "]" && stack[stack.length - 1] === "["){
                stack.pop();
            }
            else {
                result = 'no';
                break;
            }
        }
    }
    if (stack.length !== 0) {
        result = 'no';
    }
    else if (result === '1' && stack.length === 0) {
        result ='yes';
    }
    console.log(result);
}
