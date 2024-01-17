let fs = require('fs');

const [n, ...arr] = fs.readFileSync('/dev/stdin').toString().split('\n');
//const [n, ...arr] = fs.readFileSync(__dirname + '/ex.txt').toString().split('\n');

function factorial(num){
    if(num<=1) return 1;
    return num * factorial(num-1);
}

for (let i=0; i<n;i++){
    let [a,b]=arr[i].split(' ').map(Number);
    console.log(Math.round((factorial(b)/(factorial(b-a)*factorial(a)))));
}
