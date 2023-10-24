let fs = require('fs');

const inputs = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
//const inputs = fs.readFileSync(__dirname+'/ex2.txt').toString().split('\n');

const k = Number(inputs[0]);


for (let i=1; i < k*2; i+=2){
    let [n, m] = inputs[i].split(' ').map(Number);
    let arr = inputs[i+1].split(' ').map(Number);

    if (n === 1 && m === 0) {
        console.log(1);
    }
    else {
        let cnt = 0;
        while (true) {
            let first = Math.max(...arr);
            let now = arr.shift();
            m--;
            if (now === first) {
                cnt+=1;
                if (m < 0) {
                    break;
                }
            }
            else {
                arr.push(now)
                if (m<0){
                    m+=arr.length;
                }
            }
        }
        console.log(cnt);
    }
}