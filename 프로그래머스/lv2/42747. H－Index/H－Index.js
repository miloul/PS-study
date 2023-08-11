function solution(citations) {
    var h = 0;
    citations.sort((a, b) => a - b);
    for (let i = 0; i < 10000; i++){
        var cnt=0;
        for (let j=0; j<citations.length; j++){
            if (citations[j] >= i)
                cnt++;
        }
        if (cnt>=i) h=i
    }
    return h;
}