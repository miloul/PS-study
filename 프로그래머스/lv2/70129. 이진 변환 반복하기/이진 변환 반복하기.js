function solution(s) {
    let zero=0, cnt=0; 
    while (s != 1) {
        const tmp = s.length
        s= s.replace(/0/gi, '')
        zero += tmp - s.length
        s = s.length.toString(2)
        cnt++
    }
    
    return [cnt, zero];
}