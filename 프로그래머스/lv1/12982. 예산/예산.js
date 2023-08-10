function solution(d, budget) {
    var answer = 0;
    let cnt=0;
    d.sort((a,b)=>(a-b));
    for (let i=0; i<d.length; i++){
        if (answer+d[i]>budget){
            break;
        }
        answer+=d[i];
        cnt++;
    }
    return cnt;
}