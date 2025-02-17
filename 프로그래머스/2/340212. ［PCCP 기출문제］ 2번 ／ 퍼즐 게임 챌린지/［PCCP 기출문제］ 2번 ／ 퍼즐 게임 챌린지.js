function solution(diffs, times, limit) {
    let timeSum = [times[0]]
    for (let i=1; i<times.length; i++) {
        timeSum.push(times[i]+times[i-1])
    }

    let start = 1; 
    let end = 100000;
    let result  = end
    
    while (start<=end) {
        let level = Math.floor((start+end)/2);
        
        let time = 0;
        for (let i=0; i<diffs.length; i++) {
            if (diffs[i] < level) {
                time+=times[i];
            }
            else {
                time += (diffs[i]-level) * timeSum[i] + times[i];
            }
        }
        
        if (time > limit) {
            start = level + 1
        }
        else {
            end = level - 1
        }
    }
    return start;
}