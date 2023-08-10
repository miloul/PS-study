function score(num){
    switch (num){
        case 6: return 1;
        case 5: return 2;
        case 4: return 3;
        case 3: return 4;
        case 2: return 5;
        default: return 6;
    }
}

function solution(lottos, win_nums) {
    var answer = [];
    let cnt = 0, zero = 0;
    for (let i=0; i<lottos.length; i++){
        if (lottos[i]==0) zero++;
        for (let j=0; j<win_nums.length; j++){
            if (lottos[i]==win_nums[j]) cnt++;
        }
    }
    let min = score(cnt);
    let max = score(cnt+zero)
    return [max, min];
}