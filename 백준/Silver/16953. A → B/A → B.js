let fs = require('fs');

let [a, b] = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);
//let [a, b] = fs.readFileSync(__dirname+'/ex2.txt').toString().split(' ').map(Number);

let cnt = 1;
while(true) {
    if (a === b) {
        break;
    }
    else if (a > b) {
        cnt = -1;
        break;
    }


    if (b%2 === 0) {
        b/=2;
    }
    else {
        let bstring = b.toString();
        if (bstring[bstring.length - 1] === '1') {
            bstring = bstring.slice(0, bstring.length -1)
            b = +bstring;
        }
        else {
            cnt = -1;
            break;
        }
    }

    cnt++;
}

console.log(cnt)
