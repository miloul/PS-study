function solution(n)
{
    var answer = 0;
    var tmp = n;
    for (let i=0; i< n.toString().length; i++){
        answer += tmp%10;
        tmp=parseInt(tmp/10);
    }

    return answer;
}